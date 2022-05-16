import { EntityManager } from "typeorm"

import {
  AbstractBatchJobStrategy,
  IBatchJobStrategy,
} from "../interfaces/batch-job-strategy"
import { BatchJob } from "../models/batch-job"

type ProductImportStrategyContext = Record<string, unknown>

class ProductImportStrategy extends AbstractBatchJobStrategy {
  static identifier = "product-import"
  static batchType = "product_import"

  private manager_: EntityManager

  constructor({ manager }) {
    super()

    this.manager_ = manager
  }

  withTransaction(manager: EntityManager): IBatchJobStrategy {
    if (!manager) {
      return this
    }

    return new ProductImportStrategy({
      manager: manager,
    })
  }

  completeJob(batchJobId: string): Promise<BatchJob> {
    return Promise.resolve(undefined)
  }

  processJob(batchJobId: string): Promise<BatchJob> {
    return Promise.resolve(undefined)
  }

  validateContext(
    context: ProductImportStrategyContext
  ): Promise<ProductImportStrategyContext> {
    return Promise.resolve(undefined)
  }

  buildTemplate(): Promise<string> {
    return Promise.resolve("")
  }

  validateFile(fileLocation: string): Promise<boolean> {
    return Promise.resolve(false)
  }
}

export default ProductImportStrategy
