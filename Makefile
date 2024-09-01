.PHONY: run db-fmt db-gen

run:
	npm run dev

db-fmt:
	npx prisma format

db-gen:
	npx prisma generate