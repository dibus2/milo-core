const DJANGO_URL_BASE = 'api';
const DJANGO_PORT = 8000;
const DJANGO_SERVER = `http://127.0.0.1:${DJANGO_PORT}/`;

const __API_ENDPOINTS__ = {

    "login": ["POST", "auth/"],

    // GET methods
    "who_am_i": ["GET", "users/"],
    "get_company": ["GET", "companies/"],
    "get_models": ["GET", "models/"],
    "get_projects": ["GET", "projects/"],
    "get_deployments": ["GET", "deployments/"],
    "get_scores": ["GET", "scores/"],

    // Create methods
    "create_company": ["POST", "companies/"],
    "create_project": ["POST", "projects/"],
    "create_data_source": ["POST", "data_source/"],
    "upload_model": ["POST", "models/"],
    "score_model": ["POST", "scoring/"],
    "deploy_model": ["POST", "deployments/"],
    "upload_score": ["POST", "scores/"],
    // Get all scores
    "list_scores": ["GET", "scores/list_scores/"],
    // subscribe to score
    "subscribe_to_score": ["POST", "scores/subscribe"],
    "unsubscribe_to_score": ["POST", "scores/unsubscribe"],
    // import score to project
    "import_sc_to_project": ["POST", "scores/import_to_project"],
    "remove_sc_from_project": ["POST", "scores/remove_from_project"],
    // Get all data sources
    "list_data_sources": ["GET", "data_sources/list_data_sources/"],
    // (uns)subscribe to data source
    "subscribe_to_data_source": ["POST", "data_sources/subscribe"],
    "unsubscribe_to_data_source": ["POST", "data_sources/unsubscribe"],
    // import data source to project
    "import_ds_to_project": ["POST", "data_sources/import_to_project"],
    "remove_ds_from_project": ["POST", "data_sources/remove_from_project"]
}

export class DJANGO_API {
    static async login(body) {
        console.log(body);
        return await fetch(`${DJANGO_SERVER}${__API_ENDPOINTS__['login'][1]}`, {
            method: `${__API_ENDPOINTS__['login'][0]}`,
            headers: {
                'Content-Type': 'application/json',
                //                'Authorization': `Token ${token}`
            },
            body: body
        })
            .then(resp => resp.json());
    };
}