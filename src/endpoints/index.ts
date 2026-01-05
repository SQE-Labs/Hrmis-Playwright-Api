import endpointsRaw from '../config/endpoints.json';

export type EndpointsShape = {
    auth: { signin: string };
    user: { list: string };
};

export const endpoints: EndpointsShape = endpointsRaw as unknown as EndpointsShape;

/**
 * Get an endpoint by dot path like 'auth.signin' — returns empty string if not found.
 */
export function getEndpoint(path: string): string {
    const parts = path.split('.');
    // simple two-level lookup
    if (parts.length !== 2) return '';
    // @ts-ignore
    return (endpoints as any)[parts[0]]?.[parts[1]] ?? '';
}

export default endpoints;
