Feature: Fetching unknown metadata
  Scenario: Fetching a service thats not in S3
    Given I GET /services/metadata/unknown
    Then response code should be 404