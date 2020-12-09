// Originaly we modified checkout and introduced "AS guest" and "As registered" tabs.
// When store pickup kicks in it would cause nested tabs logic which hurts UX.
// So when store pickup is available we replace original tabs with "Shipping"/"Store Pickup"
// In this case to keep original mopdification too, it has been moved to content and is now displayed as text. Either "I have an account. {link}Log in{/link}" or "{link}I'm new here{/link}".
// Links toggle shipping form fields as in original modification
define([
    'jquery',
    'Magento_InventoryInStorePickupFrontend/js/view/store-pickup',
], function($) {
    'use strict';

    return function(EmailComponent) {
        return EmailComponent.extend({
            defaults: {
                imports: {
                    isStorePickupAvailable:
                        'checkout.steps.store-pickup:isAvailable',
                    isStorePickupSelected:
                        'checkout.steps.store-pickup:isStorePickupSelected',
                },
            },

            isStorePickupEnabled: function() {
                return (
                    typeof this.isStorePickupAvailable === 'object' &&
                    this.isStorePickupAvailable !== null
                );
            },
        });
    };
});
