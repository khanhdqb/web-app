(function(window) {
  window["env"] = window["env"] || {};

  // BackEnd Environment variables
  window["env"]["fineractApiUrls"] = 'https://api.fintaz.com';
  window["env"]["fineractApiUrl"]  = 'https://api.fintaz.com';

  window["env"]["apiProvider"] = '/fineract-provider/api';
  window["env"]["apiVersion"]  = '/v1';

  window["env"]["fineractPlatformTenantId"]  = 'default';

  // Language Environment variables
  window["env"]["defaultLanguage"] = 'en-US';
  window["env"]["supportedLanguages"] = 'en-US,vi-VI';
})(this);
