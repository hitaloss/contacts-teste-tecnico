import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors/appError";
import { IClientUpdate } from "../../interfaces/client";
import { hash } from "bcrypt";

async function clientUpdateService(
  id: string,
  { fullName, phone, password }: IClientUpdate
): Promise<Client> {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id });

  if (!client) throw new AppError(404, "Client not found.");

  await clientRepository.update(id, {
    fullName: fullName ? fullName : client.fullName,
    phone: phone ? phone : client.phone,
    password: password ? await hash(password, 10) : client.password,
  });

  const clientResponse = await clientRepository.findOneBy({ id });
  return clientResponse!;
}

export default clientUpdateService;
