-- CreateTable
CREATE TABLE "appointments" (
    "id" UUID NOT NULL,
    "customer_id" UUID NOT NULL,
    "store_id" UUID NOT NULL,
    "retail" DECIMAL(10,2) NOT NULL,
    "wholesale" DECIMAL(10,2),
    "is_wholesale" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "payment_method" "PaymentType" NOT NULL DEFAULT 'CASH',
    "expiration_date" DATE,
    "note" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" DATE,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment_service" (
    "id" UUID NOT NULL,
    "appointment_id" UUID NOT NULL,
    "service_id" UUID NOT NULL,
    "store_id" UUID NOT NULL,

    CONSTRAINT "appointment_service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "appointments_store_id_customer_id_idx" ON "appointments"("store_id", "customer_id");

-- CreateIndex
CREATE INDEX "appointments_store_id_idx" ON "appointments"("store_id");

-- CreateIndex
CREATE INDEX "appointments_customer_id_idx" ON "appointments"("customer_id");

-- CreateIndex
CREATE INDEX "appointment_service_appointment_id_idx" ON "appointment_service"("appointment_id");

-- CreateIndex
CREATE INDEX "appointment_service_service_id_idx" ON "appointment_service"("service_id");

-- CreateIndex
CREATE INDEX "appointment_service_store_id_idx" ON "appointment_service"("store_id");

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_service" ADD CONSTRAINT "appointment_service_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_service" ADD CONSTRAINT "appointment_service_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment_service" ADD CONSTRAINT "appointment_service_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
