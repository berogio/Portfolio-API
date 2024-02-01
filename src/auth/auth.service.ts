// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(payload: any): Promise<any> {
    // Fügen Sie hier Ihre Benutzerüberprüfungslogik hinzu
    // Zum Beispiel Datenbankabfrage oder andere Überprüfungen
    return { userId: payload.sub, username: payload.username };
  }
}
