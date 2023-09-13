import { AppDataSource } from "../data-source"
import { Address, Category, RealEstate } from "../entities"
import AppError from "../error"

export const realEstateCreate = async (data: any) => {
  
  const repoAddress = AppDataSource.getRepository(Address);

  const existingAddress = await repoAddress.findOne({
    
    where: {
      street: data.address.street,
      zipCode: data.address.zipCode,
      number: data.address.number,
      city: data.address.city,
      state: data.address.state,
    },
  });

  if (existingAddress) {
    throw new AppError("Address already exists", 409);
  }

  const addressData = data.address;

  delete data.address;
  
  const repoCategory = AppDataSource.getRepository(Category);

  const category = await repoCategory.findOneBy({
    id: data.categoryId,
  });
  
  const realEstateWithoutAddress = data;
  
  const newAddress = repoAddress.create({
    ...addressData,
  });

  await repoAddress.save(newAddress);
  
  const repoRealEstate = AppDataSource.getRepository(RealEstate);

  const newRealEstate = repoRealEstate.create({
    address: newAddress,
    ...realEstateWithoutAddress,
    category,
  });

  await repoRealEstate.save(newRealEstate);

  return newRealEstate;
  
}

export const readServices = async () => {
    
    const realEstateRepo = AppDataSource.getRepository(RealEstate)

    const realEstate = await realEstateRepo.find({
        relations: {
            address: true,
        }
    })

    return realEstate
}