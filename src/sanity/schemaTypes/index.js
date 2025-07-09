import { blogType } from "../blogType"
import { leedType } from "../leedType"
import { productType } from "../product"

import { coursesType } from "../courses"
import { engType } from "../engType"
import { devType } from "../devType"
import { aiType } from "../aiType"
import { equipmentType } from "../equipmentType"
import { wasteType } from "../wasteType"
import { energyType } from "../energyType"
import { hvacType } from "../hvacType"




export const schema = {
  types: [blogType,equipmentType,coursesType,engType,devType,aiType,energyType,wasteType, leedType, hvacType, productType],
}
