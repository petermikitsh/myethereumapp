// Decorates an app object so all calls appear to be external requests.
export function external(app) {
  function externalParams(params) {
    return {
      ...params,
      provider: 'rest',
    };
  }

  return {
    service: (serviceName) => {
      const fns = app.service(serviceName);
      return {
        find: params => fns.find(externalParams(params)),
        get: (id, params) => fns.get(id, externalParams(params)),
        create: (data, params) => fns.create(data, externalParams(params)),
        update: (id, data, params) => fns.update(id, data, externalParams(params)),
        patch: (id, data, params) => fns.patch(id, data, externalParams(params)),
        remove: (id, params) => fns.remove(id, externalParams(params)),
      };
    },
  };
}
