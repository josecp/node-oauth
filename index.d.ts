declare class OAuth {
    constructor(requestTokenUrl: string, accessTokenUrl: string, applicationConsumerKey: string, applicationSecret: string, oauthVersion: string, something: any, encryption: string);
    get(url: string, userToken: string, userSecret: string, callback: (error: any, data: any, response: any) => any): OAuth;
    delete(url: string, userToken: string, userSecret: string, callback: (error: any, data: any, response: any) => any): OAuth;
    post(url: string, oauth_token: string, oauth_token_secret: string, post_body: any, post_content_type: string, callback: any): OAuth;
    put(url: string, oauth_token: string, oauth_token_secret: string, post_body: any, post_content_type: string, callback: any): OAuth;
    getOAuthRequestToken(callback: (error: any, oauth_token: string, oauth_token_secret: string, results: any) => void): void;
}

export { OAuth };

declare class OAuth2 {
    constructor(clientId: string, clientSecret: string, baseSite: string, authorizePath: string, accessTokenPath: string, customHeaders: any);
    getOAuthAccessToken(code: string, params: any, callback: (error: any, access_token: string, refresh_token: string, results: any) => void): void;
}

export { OAuth2 };
