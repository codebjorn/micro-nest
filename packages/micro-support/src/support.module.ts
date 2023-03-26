import { Global, Module } from "@nestjs/common";
import { AuthClient, DocumentsClient, UsersClient } from "./clients";
import { AuthGuard } from "./guards/auth.guard";

@Global()
@Module({
  imports: [],
  controllers: [],
  exports: [AuthClient, DocumentsClient, UsersClient, AuthGuard],
  providers: [AuthClient, DocumentsClient, UsersClient, AuthGuard],
})
export class SupportModule {}
