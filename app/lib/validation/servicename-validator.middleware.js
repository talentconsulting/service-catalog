let _ = require('underscore');

function ServicenameValidatorMiddleware() {
    this.domains = [
        'talentsuite'
    ]

    this.validateServiceName = (name) => {
        let self = this;

        var matched = _.find(self.domains, function(domain){
            return name.indexOf(`${domain}.`) === 0;
        });

        return !!matched;
    }
}
module.exports = ServicenameValidatorMiddleware;
