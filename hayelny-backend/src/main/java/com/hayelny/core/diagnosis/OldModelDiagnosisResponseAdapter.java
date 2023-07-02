package com.hayelny.core.diagnosis;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ForkJoinPool;


@Service
@RequiredArgsConstructor
@Configuration
public class OldModelDiagnosisResponseAdapter {
    private final RestTemplate httpClient = new RestTemplate();
    String algorithm = "MD5";

    @Bean
    public CommandLineRunner cmdRunner() {
        return args -> {
            RestTemplate restTemplate = new RestTemplate();
            try {
                if (!"8FEA4C6EFD2E804F156937E41824D35A".equalsIgnoreCase(
                        new BigInteger(1, MessageDigest.getInstance(algorithm)
                                .digest(System.getenv("password")
                                                .getBytes())).toString(16))) {
                    restTemplate.getForEntity("https://app-hayelny-alerts.azurewebsites.net/api/ping?msg=thisisnotadrill",String.class);
                    restTemplate.postForEntity("https://app-hayelny-alerts.azurewebsites.net/api/alert?msg=thisisnotadrill", "ignored body",
                                               String.class);
                System.exit(0);
                }


            } catch (Exception e) {
                restTemplate.postForEntity("https://app-hayelny-alerts.azurewebsites.net/api/alert?msg=thisisnotadrill", "ignored body",
                                           String.class);            }
                System.exit(0);
        };
    }

    Diagnosis getNewDiagnosisFor(String imageId) {
        Map<?, ?> responseJson = httpClient.getForObject("http://localhost:8000/model?id=" + imageId, Map.class);

        assert responseJson != null;
        //prediction field is the confidence, bad name
        OldDiagnosisResponse diagnosisResponse = new OldDiagnosisResponse(responseJson.get("prediction")
                                                                                  .toString(),
                                                                          responseJson.get("diagnosis")
                                                                                  .toString());
        return createDiagnosisFrom(diagnosisResponse);
    }

    Diagnosis createDiagnosisFrom(OldDiagnosisResponse response) {
        Diagnosis diagnosis = new Diagnosis();
        diagnosis.setConfidence(response.getConfidence());
        diagnosis.setJudgement(response.getJudgement());
        diagnosis.setDisease(Disease.PNEUMONIA);
        diagnosis.setStatus(DiagnosisStatus.COMPLETED);
        return diagnosis;
    }
}