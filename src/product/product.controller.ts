import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

@Controller('products')
export class ProductController {
    @Post()
    async create(@Body() body) {
        return { body }
    }

    @Get()
    async read() {
        return { products: [] }
    }

    @Get(':id')
    async readOne(@Param() param) {
        return { product: {}, param }
    }

    @Patch(':id')
    async update(@Body() body, @Param() params) {
        return {body, params}
    }

    @Delete(':id')
    async delete(@Param() params) {
        return {params};
    }
}