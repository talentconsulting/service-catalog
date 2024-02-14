Feature: Posting service metadat contain a name different to the path paremeter
  Scenario: Posting invalid metadata
    Given I pipe contents of file assets/2.0.0/valid-service-metadata.json to body
    And I set Content-Type header to application/json
    When I POST to /services/metadata/talentsuite.projects-api1
    Then response code should be 400