import { AppDataSource } from "../data-source"
import { Category } from "../entities"

export const createCategoriesServices = async (payload: Category) =>{
    const {name} = payload
    const repo = AppDataSource.getRepository(Category)
    const category = repo.create({name})
    await repo.save(category)
    return category
}

export const getCategoriesService = async () => {
    const repository = AppDataSource.getRepository(Category)
    const category = await repository.find()
    return category
}

export const categoryServices = async (categoryId:number) => {
    const categoryRepo = AppDataSource.getRepository(Category)
    const category = await categoryRepo.findOne({
        where: {
            id: categoryId
        }, 
        relations: {
            realEstate: true
        }
    })

    return category

}