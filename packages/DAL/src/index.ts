import cors from "cors";
import express from "express";
import { json } from "body-parser";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { ApolloServer } from "@apollo/server";
import { useServer } from "graphql-ws/lib/use/ws";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";

const app = express();
const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});
const schema = makeExecutableSchema({ typeDefs, resolvers });
useServer({ schema }, wsServer);

const startApolloServer = async () => {
  const server = new ApolloServer({
    schema,
  });

  await server.start();
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server)
  );

  const PORT = 4000;
  httpServer.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();
