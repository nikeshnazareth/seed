export interface IRecord {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface INewRecord {
    body: string;
    title: string;
}

class Server {

    /**
     * Retrieves the records from the server
     */
    public static get(): Promise<IRecord[]> {
        return fetch(Server.url)
            .then(res => res.json());
    }

    public static post(record: INewRecord): Promise<IRecord> {
        return fetch(Server.url, {
            body: JSON.stringify(record),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        })
            .then(res => res.json())

    }

    private static url: string = 'https://jsonplaceholder.typicode.com/posts'
}

export default Server;
