import { NextApiRequest, NextApiResponse } from "next";

function requireAnyOfMethods(methods: string[]) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    if (!methods.includes(req.method!!)) {
      res.setHeader("Allow", methods);
      res.status(405).end(`Method ${req.method} Not Allowed`);

      return false;
    }

    return true;
  };
}

function requireMethod(method: string) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== method) {
      res.setHeader("Allow", [method]);
      res.status(405).end(`Method ${req.method} Not Allowed`);

      return false;
    }

    return true;
  };
}

function requireContentType(contentType: string) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    if (req.headers["content-type"] !== contentType) {
      res
        .status(415)
        .end(`Content-Type ${req.headers["content-type"]} Not Supported`);

      return false;
    }

    return true;
  };
}

function requireAnyOfContentTypes(contentTypes: string[]) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    if (req.headers["content-type"] === undefined) {
      return true;
    }
    if (!contentTypes.includes(req.headers["content-type"]!!)) {
      res
        .status(415)
        .end(`Content-Type ${req.headers["content-type"]} Not Supported`);

      return false;
    }

    return true;
  };
}

function handleOptions(
  req: NextApiRequest,
  res: NextApiResponse,
  exists?: boolean
) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", [
      "GET",
      "POST",
      "PUT",
      "DELETE",
    ]);
    res.setHeader("Access-Control-Allow-Headers", ["Content-Type"]);
    res.setHeader("Access-Control-Max-Age", "86400");
    res.status(exists ? 200 : 204).end();
  }
}

export {
  requireAnyOfMethods,
  requireMethod,
  requireContentType,
  requireAnyOfContentTypes,
  handleOptions,
};
