/// <reference path="../../src/globals.d.ts" />
// @ts-check

import '../../commands'

describe('Cypress LaunchDarkly control', () => {
  if (Cypress.isLaunchDarklyControlInitialized()) {
    const featureFlagKey = 'testing-launch-darkly-control-from-cypress'

    it('fetches the feature flag', () => {
      cy.getFeatureFlag(featureFlagKey)
    })

    it('sets the flag for a user')

    it('deletes user target from the flag')
  } else {
    it('has no LD API')
  }
})
