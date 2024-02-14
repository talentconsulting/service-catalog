Feature: Filtering services by team
  Scenario: Searching by team across all schema versions
    Given I pipe contents of file assets/2.0.0/valid-service-metadata-wrapper.json to body
    And I set Content-Type header to application/json
    When I POST to /services/metadata/talentsuite.projects-api-wrapper
    Then response code should be 201
    When I update payload from file assets/2.0.0/valid-service-metadata-clients.json to body
    When I POST to /services/metadata/talentsuite.projects-api-clients
    Then response code should be 201
    When I update payload from file assets/2.0.0/valid-service-metadata.json to body
    When I POST to /services/metadata/talentsuite.projects-api
    Then response code should be 201
    When I update payload from file assets/2.0.0/valid-service-metadata-bids.json to body
    When I POST to /services/metadata/talentsuite.projects-api-bids
    Then response code should be 201
    When I GET /services/metadata?team=Dev-ops
    Then response body path $ should be of type array with length 1
    When I GET /services/metadata?team=Delivery
    Then response body path $ should be of type array with length 1
    When I GET /services?team=Unknown
    Then response body path $ should be of type array with length 0
    When I GET /services?team=Analysis
    Then response body path $ should be of type array with length 1