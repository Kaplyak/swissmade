export default function Test() {
    return(
        <>
            <nav class="container flex justify-between px-4 py-8 mx-auto bg-white">
                <div>
                    <h3 class="text-2xl font-medium text-blue-500">LOGO</h3>
                </div>
                <div class="hidden space-x-8 lg:flex">
                    <a href="#">Menu 1</a>
                    <a href="#">Menu 2</a>
                    <a href="#">Menu 3</a>
                    <a href="#">Menu 4</a>
                </div>
                <div class="flex lg:hidden">
                    <div class="space-y-2">
                        <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                        <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                        <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                    </div>
                </div>
            </nav>
        </>
    )
}