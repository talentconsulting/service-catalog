@only
Feature: Filtering services by pillar
  Scenario: Searching by team across all schema versions
    Given I pipe contents of file assets/2.0.0/valid-service-metadata-thirdparty.json to body
    And I set Content-Type header to application/json
    When I POST to /services/metadata/talentsuite.projects-api-thirdparty
    Then response code should be 201
    When I update payload from file assets/2.0.0/valid-service-metadata-clients.json to body
    When I POST to /services/metadata/talentsuite.projects-api-clients
    Then response code should be 201
    When I update payload from file assets/2.0.0/valid-service-metadata-bids.json to body
    When I POST to /services/metadata/talentsuite.projects-api-bids
    Then response code should be 201
    When I update payload from file assets/2.0.0/valid-service-metadata-lego.json to body
    When I POST to /services/metadata/talentsuite.projects-api-lego
    Then response code should be 201
    When I GET /services/metadata?pillar=Cloud and infrastructure
    Then response body path $ should be of type array with length 1
    When I GET /services/metadata?pillar=Delivery
    Then response body path $ should be of type array with length 2
    When I GET /services?pillar=Delivery
    Then response body path $ should be of type array with length 2