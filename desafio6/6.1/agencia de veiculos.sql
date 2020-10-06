CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "email" text NOT NULL,
  "phone" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "adress_id" int NOT NULL,
  "phone" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "adresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text NOT NULL,
  "number" text NOT NULL,
  "city" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "model_id" int NOT NULL,
  "order_id" int NOT NULL,
  "color" text NOT NULL,
  "tag" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "year" int NOT NULL,
  "model" text NOT NULL,
  "brand" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "customer_id" int NOT NULL,
  "agency_id" int NOT NULL,
  "car_id" int NOT NULL,
  "price" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

ALTER TABLE "adresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("adress_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");
