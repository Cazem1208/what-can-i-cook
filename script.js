// =====================================================
// LANGUAGE
// =====================================================

let currentLanguage = "en";


// =====================================================
// TRANSLATIONS
// =====================================================

const translations = {

    en: {

        navIngredients: "Ingredients",
        navRecipes: "Recipes",

        heroTag: "YOUR PERSONAL RECIPE FINDER",

        heroTitle1: "What can you",
        heroTitle2: "cook today?",

        heroDescription:
            "Tell us what ingredients you have, and we'll help you find something delicious to cook.",

        heroButton:
            "Find My Recipe ↓",

        heroTrustOne:
            "90 hand-picked recipes",

        heroTrustTwo:
            "Cook with what you have",

        previewKicker:
            "TONIGHT'S INSPIRATION",

        previewMatch:
            "Made for your kitchen",

        previewTitle:
            "Turn everyday ingredients into something delicious.",

        previewMethod:
            "Any method",

        step1: "STEP 1",

        ingredientTitle1:
            "What ingredients",

        ingredientTitle2:
            "do you have?",

        ingredientDescription:
            "Select all the ingredients you currently have.",

        searchPlaceholder:
            "Search ingredients...",

        yourIngredients:
            "Your ingredients",

        noIngredients:
            "No ingredients selected yet.",

        findRecipes:
            "🍳 Find Recipes",

        cookingMethodStep:
            "STEP 2",

        cookingMethodTitle:
            "How do you want to cook?",

        cookingMethodDescription:
            "Choose the cooking equipment you have.",

        methodAny:
            "Any Method",

        methodAirFryer:
            "Air Fryer",

        methodFryingPan:
            "Frying Pan",

        methodRiceCooker:
            "Rice Cooker / Pot",

        step3:
            "STEP 3",

        recipeTitle:
            "What can you cook?",

        recipeDescription:
            "Recipes that match the ingredients you selected.",

        emptyTitle:
            "No recipes yet",

        emptyDescription:
            "Select some ingredients above to discover what you can cook.",

        footerText:
            "Made with HTML, CSS & JavaScript"

    },


    zh: {

        navIngredients:
            "食材",

        navRecipes:
            "食谱",

        heroTag:
            "你的私人食谱助手",

        heroTitle1:
            "今天",

        heroTitle2:
            "想煮什么？",

        heroDescription:
            "告诉我们你有什么食材，我们帮你找到可以做的美味料理。",

        heroButton:
            "寻找食谱 ↓",

        heroTrustOne:
            "90 道精选食谱",

        heroTrustTwo:
            "用现有食材做料理",

        previewKicker:
            "今晚灵感",

        previewMatch:
            "为你的厨房而设计",

        previewTitle:
            "把日常食材变成美味料理。",

        previewMethod:
            "不限方式",

        step1:
            "第一步",

        ingredientTitle1:
            "你有哪些",

        ingredientTitle2:
            "食材？",

        ingredientDescription:
            "选择你目前拥有的所有食材。",

        searchPlaceholder:
            "搜索食材...",

        yourIngredients:
            "你拥有的食材",

        noIngredients:
            "还没有选择任何食材。",

        findRecipes:
            "🍳 寻找食谱",

        cookingMethodStep:
            "第二步",

        cookingMethodTitle:
            "你想用什么方式烹饪？",

        cookingMethodDescription:
            "选择你拥有的烹饪设备。",

        methodAny:
            "不限方式",

        methodAirFryer:
            "空气炸锅",

        methodFryingPan:
            "平底锅",

        methodRiceCooker:
            "电饭锅 / 锅",

        step3:
            "第三步",

        recipeTitle:
            "今天可以煮什么？",

        recipeDescription:
            "根据你选择的食材，为你推荐合适的食谱。",

        emptyTitle:
            "还没有食谱",

        emptyDescription:
            "选择上面的食材，看看你可以做什么料理。",

        footerText:
            "使用 HTML、CSS 和 JavaScript 制作"

    }

};


// =====================================================
// INGREDIENT DATA
// =====================================================

const ingredients = [

    // =================================================
    // MEAT & POULTRY
    // =================================================

    {
        category: "Meat & Poultry",
        categoryZh: "肉类 & 家禽",
        icon: "🍗",

        items: [

            {
                name: "Chicken",
                chinese: "鸡肉",
                icon: "🍗"
            },

            {
                name: "Pork",
                chinese: "猪肉",
                icon: "🥩"
            },

            {
                name: "Beef",
                chinese: "牛肉",
                icon: "🥩"
            },

            {
                name: "Lamb",
                chinese: "羊肉",
                icon: "🥩"
            },

            {
                name: "Sausage",
                chinese: "香肠",
                icon: "🌭"
            },

            {
                name: "Bacon",
                chinese: "培根",
                icon: "🥓"
            },

            {
                name: "Ham",
                chinese: "火腿",
                icon: "🥓"
            }

        ]
    },


    // =================================================
    // SEAFOOD
    // =================================================

    {
        category: "Seafood",
        categoryZh: "海鲜",
        icon: "🦐",

        items: [

            {
                name: "Prawn",
                chinese: "虾",
                icon: "🦐"
            },

            {
                name: "Squid",
                chinese: "鱿鱼",
                icon: "🦑"
            },

            {
                name: "Fish",
                chinese: "鱼",
                icon: "🐟"
            },

            {
                name: "Salmon",
                chinese: "三文鱼",
                icon: "🐟"
            },

            {
                name: "Mackerel",
                chinese: "鲭鱼",
                icon: "🐟"
            },

            {
                name: "Tuna",
                chinese: "金枪鱼",
                icon: "🐟"
            },

            {
                name: "Crab",
                chinese: "螃蟹",
                icon: "🦀"
            },

            {
                name: "Clam",
                chinese: "蛤蜊",
                icon: "🦪"
            },

            {
                name: "Fish Ball",
                chinese: "鱼丸",
                icon: "🍡"
            },

            {
                name: "Fish Cake",
                chinese: "鱼饼",
                icon: "🍥"
            }

        ]
    },


    // =================================================
    // VEGETABLES
    // =================================================

    {
        category: "Vegetables",
        categoryZh: "蔬菜",
        icon: "🥬",

        items: [

            {
                name: "Potato",
                chinese: "马铃薯",
                icon: "🥔"
            },

            {
                name: "Sweet Potato",
                chinese: "番薯",
                icon: "🍠"
            },

            {
                name: "Carrot",
                chinese: "胡萝卜",
                icon: "🥕"
            },

            {
                name: "Tomato",
                chinese: "番茄",
                icon: "🍅"
            },

            {
                name: "Onion",
                chinese: "洋葱",
                icon: "🧅"
            },

            {
                name: "Spring Onion",
                chinese: "青葱",
                icon: "🌱"
            },

            {
                name: "Garlic",
                chinese: "蒜",
                icon: "🧄"
            },

            {
                name: "Ginger",
                chinese: "姜",
                icon: "🫚"
            },

            {
                name: "Cabbage",
                chinese: "包菜",
                icon: "🥬"
            },

            {
                name: "Chinese Cabbage",
                chinese: "大白菜",
                icon: "🥬"
            },

            {
                name: "Bok Choy",
                chinese: "小白菜",
                icon: "🥬"
            },

            {
                name: "Spinach",
                chinese: "菠菜",
                icon: "🥬"
            },

            {
                name: "Kangkung",
                chinese: "空心菜",
                icon: "🌿"
            },

            {
                name: "Broccoli",
                chinese: "西兰花",
                icon: "🥦"
            },

            {
                name: "Cauliflower",
                chinese: "花椰菜",
                icon: "🥦"
            },

            {
                name: "Bean Sprouts",
                chinese: "豆芽",
                icon: "🌱"
            },

            {
                name: "Long Beans",
                chinese: "长豆",
                icon: "🫛"
            },

            {
                name: "Green Beans",
                chinese: "四季豆",
                icon: "🫛"
            },

            {
                name: "Peas",
                chinese: "豌豆",
                icon: "🫛"
            },

            {
                name: "Corn",
                chinese: "玉米",
                icon: "🌽"
            },

            {
                name: "Capsicum",
                chinese: "灯笼椒",
                icon: "🫑"
            },

            {
                name: "Eggplant",
                chinese: "茄子",
                icon: "🍆"
            },

            {
                name: "Cucumber",
                chinese: "黄瓜",
                icon: "🥒"
            },

            {
                name: "Bitter Gourd",
                chinese: "苦瓜",
                icon: "🥒"
            },

            {
                name: "Lady Finger",
                chinese: "秋葵",
                icon: "🌱"
            },

            {
                name: "Radish",
                chinese: "萝卜",
                icon: "🥕"
            }

        ]
    },


    // =================================================
    // MUSHROOMS
    // =================================================

    {
        category: "Mushrooms",
        categoryZh: "蘑菇",
        icon: "🍄",

        items: [

            {
                name: "Mushroom",
                chinese: "蘑菇",
                icon: "🍄"
            },

            {
                name: "Shiitake Mushroom",
                chinese: "香菇",
                icon: "🍄"
            },

            {
                name: "Oyster Mushroom",
                chinese: "平菇",
                icon: "🍄"
            },

            {
                name: "Enoki Mushroom",
                chinese: "金针菇",
                icon: "🍄"
            }

        ]
    },


    // =================================================
    // RICE & NOODLES
    // =================================================

    {
        category: "Rice & Noodles",
        categoryZh: "米饭 & 面类",
        icon: "🍚",

        items: [

            {
                name: "Rice",
                chinese: "米饭",
                icon: "🍚"
            },

            {
                name: "Rice Vermicelli",
                chinese: "米粉",
                icon: "🍜"
            },

            {
                name: "Rice Noodles",
                chinese: "米线",
                icon: "🍜"
            },

            {
                name: "Egg Noodles",
                chinese: "鸡蛋面",
                icon: "🍜"
            },

            {
                name: "Kuey Teow",
                chinese: "粿条",
                icon: "🍜"
            },

            {
                name: "Yellow Noodles",
                chinese: "黄面",
                icon: "🍜"
            },

            {
                name: "Instant Noodles",
                chinese: "方便面",
                icon: "🍜"
            },

            {
                name: "Udon",
                chinese: "乌冬面",
                icon: "🍜"
            },

            {
                name: "Soba",
                chinese: "荞麦面",
                icon: "🍜"
            },

            {
                name: "Pasta",
                chinese: "意大利面",
                icon: "🍝"
            },

            {
                name: "Spaghetti",
                chinese: "意大利细面",
                icon: "🍝"
            }

        ]
    },


    // =================================================
    // EGGS & TOFU
    // =================================================

    {
        category: "Eggs & Tofu",
        categoryZh: "鸡蛋 & 豆腐",
        icon: "🥚",

        items: [

            {
                name: "Egg",
                chinese: "鸡蛋",
                icon: "🥚"
            },

            {
                name: "Salted Egg",
                chinese: "咸蛋",
                icon: "🥚"
            },

            {
                name: "Century Egg",
                chinese: "皮蛋",
                icon: "🥚"
            },

            {
                name: "Tofu",
                chinese: "豆腐",
                icon: "◻️"
            },

            {
                name: "Beancurd Skin",
                chinese: "腐皮",
                icon: "◻️"
            }

        ]
    },


    // =================================================
    // SPICES & HERBS
    // =================================================

    {
        category: "Spices & Herbs",
        categoryZh: "香料 & 香草",
        icon: "🌶️",

        items: [

            {
                name: "Chili",
                chinese: "辣椒",
                icon: "🌶️"
            },

            {
                name: "Bird's Eye Chili",
                chinese: "小米椒",
                icon: "🌶️"
            },

            {
                name: "Dried Chili",
                chinese: "干辣椒",
                icon: "🌶️"
            },

            {
                name: "Chili Flakes",
                chinese: "辣椒碎",
                icon: "🌶️"
            },

            {
                name: "Black Pepper",
                chinese: "黑胡椒",
                icon: "⚫"
            },

            {
                name: "White Pepper",
                chinese: "白胡椒",
                icon: "⚪"
            },

            {
                name: "Cumin",
                chinese: "孜然",
                icon: "🌿"
            },

            {
                name: "Coriander",
                chinese: "芫荽",
                icon: "🌿"
            },

            {
                name: "Curry Powder",
                chinese: "咖喱粉",
                icon: "🌿"
            },

            {
                name: "Sichuan Pepper",
                chinese: "花椒",
                icon: "🌶️"
            },

            {
                name: "Five Spice Powder",
                chinese: "五香粉",
                icon: "🌿"
            },

            {
                name: "Turmeric",
                chinese: "姜黄粉",
                icon: "🟡"
            },

            {
                name: "Cinnamon",
                chinese: "肉桂",
                icon: "🌿"
            },

            {
                name: "Star Anise",
                chinese: "八角",
                icon: "⭐"
            },

            {
                name: "Cloves",
                chinese: "丁香",
                icon: "🌿"
            },

            {
                name: "Bay Leaf",
                chinese: "月桂叶",
                icon: "🍃"
            },

            {
                name: "Curry Leaves",
                chinese: "咖喱叶",
                icon: "🍃"
            },

            {
                name: "Lemongrass",
                chinese: "香茅",
                icon: "🌿"
            },

            {
                name: "Pandan Leaf",
                chinese: "班兰叶",
                icon: "🍃"
            },

            {
                name: "Basil",
                chinese: "罗勒",
                icon: "🌿"
            },

            {
                name: "Mint",
                chinese: "薄荷",
                icon: "🌿"
            }

        ]
    },


    // =================================================
    // SAUCES & SEASONINGS
    // =================================================

    {
        category: "Sauces & Seasonings",
        categoryZh: "酱料 & 调味料",
        icon: "🧂",

        items: [

            {
                name: "Salt",
                chinese: "盐",
                icon: "🧂"
            },

            {
                name: "Sugar",
                chinese: "糖",
                icon: "🍬"
            },

            {
                name: "Soy Sauce",
                chinese: "酱油",
                icon: "🫙"
            },

            {
                name: "Dark Soy Sauce",
                chinese: "黑酱油",
                icon: "🫙"
            },

            {
                name: "Oyster Sauce",
                chinese: "蚝油",
                icon: "🫙"
            },

            {
                name: "Doubanjiang",
                chinese: "豆瓣酱",
                icon: "🌶️"
            },

            {
                name: "Fish Sauce",
                chinese: "鱼露",
                icon: "🫙"
            },

            {
                name: "Sesame Oil",
                chinese: "麻油",
                icon: "🫙"
            },

            {
                name: "Chili Sauce",
                chinese: "辣椒酱",
                icon: "🌶️"
            },

            {
                name: "Sambal",
                chinese: "参巴酱",
                icon: "🌶️"
            },

            {
                name: "Tomato Sauce",
                chinese: "番茄酱",
                icon: "🍅"
            },

            {
                name: "Mayonnaise",
                chinese: "蛋黄酱",
                icon: "🥫"
            },

            {
                name: "Hoisin Sauce",
                chinese: "海鲜酱",
                icon: "🫙"
            },

            {
                name: "Teriyaki Sauce",
                chinese: "照烧酱",
                icon: "🫙"
            },

            {
                name: "Vinegar",
                chinese: "醋",
                icon: "🫙"
            },

            {
                name: "Rice Vinegar",
                chinese: "米醋",
                icon: "🫙"
            },

            {
                name: "Shaoxing Wine",
                chinese: "绍兴酒",
                icon: "🍶"
            },

            {
                name: "Chicken Stock",
                chinese: "鸡汤块",
                icon: "🥣"
            }

        ]
    },


    // =================================================
    // OTHER INGREDIENTS
    // =================================================

    {
        category: "Other Ingredients",
        categoryZh: "其他食材",
        icon: "🥥",

        items: [

            {
                name: "Coconut Milk",
                chinese: "椰浆",
                icon: "🥥"
            },

            {
                name: "Peanut",
                chinese: "花生",
                icon: "🥜"
            },

            {
                name: "Peanut Butter",
                chinese: "花生酱",
                icon: "🥜"
            },

            {
                name: "Sesame Seeds",
                chinese: "芝麻",
                icon: "🌱"
            },

            {
                name: "Flour",
                chinese: "面粉",
                icon: "🌾"
            },

            {
                name: "Cornstarch",
                chinese: "玉米淀粉",
                icon: "🌾"
            },

            {
                name: "Breadcrumbs",
                chinese: "面包糠",
                icon: "🍞"
            },

            {
                name: "Bread",
                chinese: "面包",
                icon: "🍞"
            },

            {
                name: "Cheese",
                chinese: "芝士",
                icon: "🧀"
            },

            {
                name: "Butter",
                chinese: "黄油",
                icon: "🧈"
            },

            {
                name: "Cooking Oil",
                chinese: "食用油",
                icon: "🫗"
            },

            {
                name: "Olive Oil",
                chinese: "橄榄油",
                icon: "🫒"
            },

            {
                name: "Milk",
                chinese: "牛奶",
                icon: "🥛"
            },

            {
                name: "Cream",
                chinese: "奶油",
                icon: "🥛"
            },

            {
                name: "Lime",
                chinese: "青柠",
                icon: "🍋"
            },

            {
                name: "Lemon",
                chinese: "柠檬",
                icon: "🍋"
            },

            {
                name: "Pineapple",
                chinese: "菠萝",
                icon: "🍍"
            }

        ]
    }

];

// =====================================================
// INGREDIENT SELECTOR
// =====================================================

let selectedIngredients = [];
let selectedCookingMethod = "all";

let ingredientSearch = null;

let englishBtn = null;

let chineseBtn = null;


// =====================================================
// GET ALL INGREDIENTS
// =====================================================

function getAllIngredients() {

    return ingredients.flatMap(
        category => category.items
    );

}


// =====================================================
// GET INGREDIENT NAME
// =====================================================

function getIngredientName(
    ingredient
) {

    return currentLanguage === "zh"
        ? ingredient.chinese
        : ingredient.name;

}


// =====================================================
// FILTER INGREDIENTS
// =====================================================

function getFilteredCategories(
    searchTerm = ""
) {

    const term =
        searchTerm
            .trim()
            .toLowerCase();


    if (!term) {

        return ingredients;

    }


    return ingredients
        .map(category => {

            const filteredItems =
                category.items.filter(
                    ingredient => {

                        const englishName =
                            ingredient.name
                                .toLowerCase();

                        const chineseName =
                            ingredient.chinese
                                .toLowerCase();

                        return (
                            englishName.includes(term) ||
                            chineseName.includes(
                                searchTerm.trim().toLowerCase()
                            )
                        );

                    }
                );


            return {

                ...category,

                items: filteredItems

            };

        })
        .filter(
            category =>
                category.items.length > 0
        );

}


// =====================================================
// FIND INGREDIENT CONTAINER
// =====================================================

function getIngredientContainer() {

    return (
        document.getElementById(
            "ingredientList"
        ) ||

        document.getElementById(
            "ingredientGrid"
        ) ||

        document.getElementById(
            "ingredientCategories"
        ) ||

        document.getElementById(
            "ingredientsContainer"
        ) ||

        document.querySelector(
            ".ingredient-grid"
        ) ||

        document.querySelector(
            ".ingredient-categories"
        ) ||

        document.querySelector(
            ".ingredients-grid"
        )
    );

}


// =====================================================
// DISPLAY INGREDIENTS
// =====================================================

function displayIngredients(
    categories
) {

    const container =
        getIngredientContainer();


    if (!container) {

        console.error(
            "Ingredient container not found."
        );

        return;

    }


    container.innerHTML = "";


    categories.forEach(
        category => {

            if (
                category.items.length === 0
            ) {

                return;

            }


            // -----------------------------
            // CATEGORY
            // -----------------------------

            const section =
                document.createElement(
                    "section"
                );


            section.className =
                "ingredient-category";


            // -----------------------------
            // CATEGORY TITLE
            // -----------------------------

            const heading =
                document.createElement(
                    "h3"
                );


            heading.className =
                "category-title";


            heading.innerHTML = `

                <span>
                    ${category.icon}
                </span>

                <span>
                    ${
                        currentLanguage === "zh"
                            ? category.categoryZh
                            : category.category
                    }
                </span>

            `;


            section.appendChild(
                heading
            );


            // -----------------------------
            // INGREDIENT GRID
            // -----------------------------

            const grid =
                document.createElement(
                    "div"
                );


            grid.className =
                "category-grid";


            category.items.forEach(
                ingredient => {

                    const card =
                        document.createElement(
                            "button"
                        );


                    card.type = "button";


                    card.className =
                        "ingredient-item";


                    if (
                        selectedIngredients.includes(
                            ingredient.name
                        )
                    ) {

                        card.classList.add(
                            "selected"
                        );

                    }


                    card.innerHTML = `

                        <span class="ingredient-icon">
                            ${ingredient.icon}
                        </span>

                        <span class="ingredient-name">
                            ${getIngredientName(
                                ingredient
                            )}
                        </span>

                        <span class="ingredient-check">
                            ✓
                        </span>

                    `;


                    card.addEventListener(
                        "click",
                        () => {

                            toggleIngredient(
                                ingredient.name
                            );

                        }
                    );


                    grid.appendChild(
                        card
                    );

                }
            );


            section.appendChild(
                grid
            );


            container.appendChild(
                section
            );

        }
    );


    // -----------------------------
    // NO RESULTS
    // -----------------------------

    if (
        container.children.length === 0
    ) {

        container.innerHTML = `

            <div class="ingredient-empty">

                ${
                    currentLanguage === "zh"
                        ? "找不到相关食材。"
                        : "No ingredients found."
                }

            </div>

        `;

    }

}


// =====================================================
// TOGGLE INGREDIENT
// =====================================================

function toggleIngredient(
    ingredientName
) {

    const index =
        selectedIngredients.indexOf(
            ingredientName
        );


    if (index === -1) {

        selectedIngredients.push(
            ingredientName
        );

    } else {

        selectedIngredients.splice(
            index,
            1
        );

    }


    displayIngredients(
        getFilteredCategories(
            ingredientSearch
                ? ingredientSearch.value
                : ""
        )
    );


    displaySelectedIngredients();

}


// =====================================================
// DISPLAY SELECTED INGREDIENTS
// =====================================================

function displaySelectedIngredients() {

    const selectedBox =
        document.getElementById(
            "selectedIngredients"
        ) ||
        document.getElementById(
            "yourIngredients"
        ) ||
        document.querySelector(
            ".selected-ingredients"
        );


    if (!selectedBox) {

        return;

    }

    updateSelectionCount();


    selectedBox.innerHTML = "";


    if (
        selectedIngredients.length === 0
    ) {

        selectedBox.innerHTML = `

            <p class="no-ingredients">

                ${
                    translations[
                        currentLanguage
                    ].noIngredients
                }

            </p>

        `;

        return;

    }


    const list =
        document.createElement(
            "div"
        );


    list.className =
        "selected-ingredients-list";


    selectedIngredients.forEach(
        ingredientName => {

            const ingredient =
                getAllIngredients().find(
                    item =>
                        item.name ===
                        ingredientName
                );


            if (!ingredient) {

                return;

            }


            const tag =
                document.createElement(
                    "button"
                );


            tag.type = "button";


            tag.className =
                "selected-ingredient";


            tag.innerHTML = `

                <span>
                    ${ingredient.icon}
                </span>

                <span>
                    ${getIngredientName(
                        ingredient
                    )}
                </span>

                <span class="remove-ingredient">
                    ×
                </span>

            `;


            tag.addEventListener(
                "click",
                () => {

                    toggleIngredient(
                        ingredientName
                    );

                }
            );


            list.appendChild(
                tag
            );

        }
    );


    selectedBox.appendChild(
        list
    );

}

// Keep the selection feedback visible even while the recipe area is off-screen.
function updateSelectionCount() {
    const count = document.getElementById("selectionCount");

    if (!count) return;

    count.textContent = currentLanguage === "zh"
        ? `已选择 ${selectedIngredients.length} 项`
        : `${selectedIngredients.length} selected`;
}
// =====================================================
// RECIPE DATABASE V2
// =====================================================

// =====================================================
// RECIPE DATABASE
// =====================================================
// Recipes live in data/recipes.json so the database can
// grow without making script.js enormous.

let findRecipesBtn = null;

let recipes = [];
let recipesReady = false;

async function loadRecipes() {
    try {
        const response = await fetch("./data/recipes.json?v=2");

        if (!response.ok) {
            throw new Error(`Could not load recipes.json (${response.status})`);
        }

        recipes = await response.json();
        recipesReady = true;

        // Update recipe count automatically
        const recipeCountText = document.getElementById("recipeCountText");

        if (recipeCountText) {
            if (currentLanguage === "zh") {
                recipeCountText.textContent = `${recipes.length} 道精选食谱`;
            } else {
                recipeCountText.textContent = `${recipes.length} hand-picked recipes`;
            }
        }

        if (findRecipesBtn) {
            findRecipesBtn.disabled = false;
        }

        console.log(`Loaded ${recipes.length} recipes.`);
    } catch (error) {
        console.error("Recipe database failed to load:", error);

        const recipeResults = document.getElementById("recipeResults");

        if (recipeResults) {
            recipeResults.innerHTML =
                `<p class="no-recipes">Unable to load the recipe database. Please run the project with Live Server.</p>`;
        }
    }
}


// =====================================================
// RECIPE MATCHING
// =====================================================

// =====================================================


const cookingMethods = {
    air_fryer: {
        name: "Air Fryer",
        nameZh: "空气炸锅",
        icon: "💨"
    },
    frying_pan: {
        name: "Frying Pan",
        nameZh: "平底锅",
        icon: "🍳"
    },
    rice_cooker: {
        name: "Rice Cooker / Pot",
        nameZh: "电饭锅 / 锅",
        icon: "🍚"
    }
};

function getAvailableCookingMethods(recipe) {
    if (!recipe.cookingMethods) {
        return [];
    }

    if (Array.isArray(recipe.cookingMethods)) {
        return recipe.cookingMethods;
    }

    return Object.keys(recipe.cookingMethods);
}

function recipeSupportsMethod(recipe, method) {
    if (method === "all") {
        return true;
    }

    return getAvailableCookingMethods(recipe).includes(method);
}

function getMethodLabel(method) {
    if (method === "all") {
        return currentLanguage === "zh"
            ? "不限方式"
            : "Any Method";
    }

    const methodData = cookingMethods[method];

    if (!methodData) {
        return method;
    }

    return currentLanguage === "zh"
        ? methodData.nameZh
        : methodData.name;
}

function getRecipeMethodData(recipe) {
    const methods = recipe.cookingMethods;

    if (!methods) {
        return null;
    }

    if (Array.isArray(methods)) {
        return null;
    }

    if (
        selectedCookingMethod !== "all" &&
        methods[selectedCookingMethod]
    ) {
        return methods[selectedCookingMethod];
    }

    const firstMethod = Object.keys(methods)[0];

    return methods[firstMethod] || null;
}

function initializeCookingMethods() {
    const methodButtons =
        document.querySelectorAll(
            ".cooking-method-item"
        );

    methodButtons.forEach(button => {
        button.addEventListener("click", () => {

            selectedCookingMethod =
                button.dataset.method || "all";

            methodButtons.forEach(item => {
                item.classList.toggle(
                    "active",
                    item === button
                );
            });

            if (selectedIngredients.length > 0) {
                displayRecipes();
            }
        });
    });
}

function calculateRecipeMatch(recipe) {
    const userIngredients = selectedIngredients.map(
        ingredient => ingredient.toLowerCase().trim()
    );

    const ingredientGroups = {
        chicken: ["chicken","chicken breast","chicken thigh","chicken wing","chicken leg","chicken drumstick"],
        rice: ["rice","white rice","jasmine rice","brown rice","cooked rice","leftover rice"],
        potato: ["potato","potatoes","baby potato"],
        prawn: ["prawn","prawns","shrimp"]
    };

    function getIngredientGroup(name) {
        const normalized = name.toLowerCase().trim();
        for (const groupName in ingredientGroups) {
            if (ingredientGroups[groupName].includes(normalized)) return groupName;
        }
        return normalized;
    }

    function userHasIngredient(name) {
        const group = getIngredientGroup(name);
        return userIngredients.some(selected => getIngredientGroup(selected) === group);
    }

    const mainIngredients = recipe.ingredients.filter(i => i.type === "main");
    const pantryIngredients = recipe.ingredients.filter(i => i.type === "pantry");

    const requiredMainIngredients = mainIngredients.filter(i => i.required !== false);
    const optionalMainIngredients = mainIngredients.filter(i => i.required === false);
    const requiredPantryIngredients = pantryIngredients.filter(i => i.required !== false);
    const optionalPantryIngredients = pantryIngredients.filter(i => i.required === false);

    const matchedMain = requiredMainIngredients.filter(i => userHasIngredient(i.name));
    const missingMain = requiredMainIngredients.filter(i => !userHasIngredient(i.name));

    const matchedOptionalMain = optionalMainIngredients.filter(i => userHasIngredient(i.name));
    const missingOptionalMain = optionalMainIngredients.filter(i => !userHasIngredient(i.name));

    const commonPantryNames = ["sugar","cooking oil","salt","soy sauce","dark soy sauce"];

    const relevantPantryIngredients = requiredPantryIngredients.filter(
        i => !commonPantryNames.includes(i.name.toLowerCase().trim())
    );

    const matchedRelevantPantry = relevantPantryIngredients.filter(i => userHasIngredient(i.name));
    const missingPantry = relevantPantryIngredients.filter(i => !userHasIngredient(i.name));

    const matchedOptionalPantry = optionalPantryIngredients.filter(i => userHasIngredient(i.name));
    const missingOptionalPantry = optionalPantryIngredients.filter(i => !userHasIngredient(i.name));

    const mainScore = requiredMainIngredients.length === 0 ? 1 :
        matchedMain.length / requiredMainIngredients.length;

    const pantryScore = relevantPantryIngredients.length === 0 ? 1 :
        matchedRelevantPantry.length / relevantPantryIngredients.length;

    const adjustedMainScore = Math.pow(mainScore, 1.15);

    const percentage = Math.round(
        ((adjustedMainScore * 0.8) + (pantryScore * 0.2)) * 100
    );

    const mainCoverage = requiredMainIngredients.length === 0 ? 1 :
        matchedMain.length / requiredMainIngredients.length;

    const totalMissing = missingMain.length + missingPantry.length;

    return {
        recipe,
        matchedMain,
        missingMain,
        matchedRelevantPantry,
        missingPantry,
        matchedOptionalMain,
        missingOptionalMain,
        matchedOptionalPantry,
        missingOptionalPantry,
        percentage,
        mainCoverage,
        totalMissing
    };
}


// =====================================================
// FIND MATCHING RECIPES
// =====================================================

function findMatchingRecipes() {
    if (selectedIngredients.length === 0) return [];

    const results = recipes.map(recipe => calculateRecipeMatch(recipe));

    const usefulResults = results.filter(
        result =>
            result.matchedMain.length > 0 &&
            recipeSupportsMethod(
                result.recipe,
                selectedCookingMethod
            )
    );

    usefulResults.sort((a,b) => {
        if (b.percentage !== a.percentage) return b.percentage - a.percentage;
        if (b.mainCoverage !== a.mainCoverage) return b.mainCoverage - a.mainCoverage;
        return a.totalMissing - b.totalMissing;
    });

    return usefulResults;
}


// =====================================================
// FORMAT QUANTITY
// =====================================================

function formatQuantity(quantity) {

    if (
        Number.isInteger(quantity)
    ) {

        return quantity.toString();

    }


    const fractions = {

        0.25: "¼",
        0.5: "½",
        0.75: "¾",
        1.25: "1¼",
        1.5: "1½",
        1.75: "1¾",
        2.5: "2½",
        3.5: "3½"

    };


    if (
        fractions[quantity]
    ) {

        return fractions[quantity];

    }


    return Number(
        quantity.toFixed(2)
    ).toString();

}


// =====================================================
// FORMAT RECIPE INGREDIENT
// =====================================================

function formatRecipeIngredient(
    ingredient,
    servings
) {

    const recipe =
        ingredient.recipe;


    const baseServings =
        recipe.servings;


    const adjustedQuantity =
        ingredient.quantity *
        servings /
        baseServings;


    const quantity =
        formatQuantity(
            adjustedQuantity
        );


    const unit =
        currentLanguage === "zh"
            ? ingredient.unitZh
            : ingredient.unit;


    const name =
        getDisplayedIngredient(
            ingredient.name
        );


    return {
        name,
        quantity,
        unit
    };

}


// =====================================================
// CREATE RECIPE CARD
// =====================================================

function createRecipeCard(result) {

    const recipe =
        result.recipe;


    const card =
        document.createElement("article");


    card.classList.add(
        "recipe-card"
    );


    const recipeName =
        currentLanguage === "zh"
            ? recipe.nameZh
            : recipe.name;


    const description =
        currentLanguage === "zh"
            ? recipe.descriptionZh
            : recipe.description;


    const difficulty =
        currentLanguage === "zh"
            ? recipe.difficultyZh
            : recipe.difficulty;


    const matchText =
        currentLanguage === "zh"
            ? `${result.percentage}% 匹配`
            : `${result.percentage}% match`;


    const haveText =
        currentLanguage === "zh"
            ? "你有"
            : "You have";


    const missingText =
        currentLanguage === "zh"
            ? "缺少"
            : "Missing";


    const viewText =
        currentLanguage === "zh"
            ? "查看完整食谱 →"
            : "View Full Recipe →";


    const mainMissing =
        result.missingMain;


    // Show every missing ingredient except the five common kitchen basics.
    // This keeps the card honest: curry powder, coconut milk, lemongrass,
    // ginger, etc. are shown when the user has not selected them.
    const missingIngredients = [
        ...result.missingMain,
        ...result.missingPantry
    ];


    const availableIngredients = [
        ...result.matchedMain,
        ...(result.matchedRelevantPantry || [])
    ];


    card.innerHTML = `

        <div class="recipe-card-top">

            <div class="recipe-emoji">
                ${recipe.emoji}
            </div>

            <div class="match-badge">
                ${matchText}
            </div>

        </div>


        <div class="recipe-card-content">

            <h3>
                ${recipeName}
            </h3>


            <p class="recipe-description">
                ${description}
            </p>


            <div class="recipe-meta">

                <span>
                    ⏱ ${recipe.time} min
                </span>

                <span>
                    👤 ${recipe.servings}
                    ${
                        currentLanguage === "zh"
                            ? "人份"
                            : recipe.servings === 1
                                ? " serving"
                                : " servings"
                    }
                </span>

                <span>
                    ${
                        recipe.difficulty === "Easy"
                            ? "🟢"
                            : "🟡"
                    }
                    ${difficulty}
                </span>

            </div>

            ${
                selectedCookingMethod !== "all"
                    ? `
                        <span class="cooking-method-badge">
                            ${getMethodLabel(selectedCookingMethod)}
                        </span>
                    `
                    : ""
            }


            <div class="ingredient-match">

                <div class="match-section">

                    <span class="match-label have">
                        ✓ ${haveText}
                    </span>

                    <div class="match-tags">

                        ${
                            availableIngredients
                                .map(
                                    ingredient => `
                                        <span class="mini-tag have-tag">
                                            ${getDisplayedIngredient(
                                                ingredient.name
                                            )}
                                        </span>
                                    `
                                )
                                .join("")
                        }

                    </div>

                </div>


                ${
                    missingIngredients.length > 0
                        ? `

                            <div class="match-section">

                                <span class="match-label missing">
                                    ✕ ${missingText}
                                </span>

                                <div class="match-tags">

                                    ${
                                        missingIngredients
                                            .slice(0, 4)
                                            .map(
                                                ingredient => `
                                                    <span class="mini-tag missing-tag">
                                                        ${getDisplayedIngredient(
                                                            ingredient.name
                                                        )}
                                                    </span>
                                                `
                                            )
                                            .join("")
                                    }

                                    ${
                                        missingIngredients.length > 4
                                            ? `
                                                <span class="more-tag">
                                                    +${
                                                        missingIngredients.length - 4
                                                    }
                                                </span>
                                            `
                                            : ""
                                    }

                                </div>

                            </div>

                        `
                        : `
                            <div class="complete-match">
                                ✓ ${
                                    currentLanguage === "zh"
                                        ? "你拥有所有主要食材！"
                                        : "You have all the main ingredients!"
                                }
                            </div>
                        `
                }

            </div>


            <button
                class="view-recipe-button"
                data-recipe-id="${recipe.id}">

                ${viewText}

            </button>

        </div>

    `;


    card.querySelector(
        ".view-recipe-button"
    ).addEventListener(
        "click",
        () => {

            openRecipeModal(
                recipe.id
            );

        }
    );


    return card;

}


// =====================================================
// DISPLAY RECIPES
// =====================================================

function displayRecipes() {

    const recipeResults =
        document.getElementById(
            "recipeResults"
        );


    const results =
        findMatchingRecipes();

    const recipeCount = document.getElementById("recipeCount");

    if (recipeCount) {
        recipeCount.textContent = results.length > 0
            ? (currentLanguage === "zh"
                ? `${results.length} 个食谱匹配`
                : `${results.length} recipe${results.length === 1 ? "" : "s"} matched`)
            : "";
    }


    recipeResults.innerHTML = "";

    if (selectedCookingMethod !== "all") {
        const methodNote = document.createElement("p");
        methodNote.className = "method-note";
        methodNote.textContent =
            currentLanguage === "zh"
                ? `正在显示适合${getMethodLabel(selectedCookingMethod)}的食谱`
                : `Showing recipes suitable for ${getMethodLabel(selectedCookingMethod)}`;
        recipeResults.appendChild(methodNote);
    }

    if (
        results.length === 0
    ) {

        recipeResults.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🥘
                </div>

                <h3>
                    ${
                        currentLanguage === "zh"
                            ? "还没有找到合适的食谱"
                            : "No matching recipes yet"
                    }
                </h3>

                <p>
                    ${
                        currentLanguage === "zh"
                            ? (
                                selectedCookingMethod !== "all"
                                    ? `目前没有适合${getMethodLabel(selectedCookingMethod)}的食谱。请尝试其他烹饪方式或选择更多食材。`
                                    : "请选择更多食材，我们会根据你的食材组合寻找食谱。"
                            )
                            : (
                                selectedCookingMethod !== "all"
                                    ? `No recipes are available for ${getMethodLabel(selectedCookingMethod)} with your selected ingredients. Try another cooking method or select more ingredients.`
                                    : "Select more ingredients and we'll find recipes based on your combination."
                            )
                    }
                </p>

            </div>

        `;

        return;

    }


    results.forEach(
        result => {

            recipeResults.appendChild(
                createRecipeCard(result)
            );

        }
    );

}


// =====================================================
// OPEN RECIPE MODAL
// =====================================================

function openRecipeModal(recipeId) {

    const recipe =
        recipes.find(
            item =>
                item.id === recipeId
        );


    if (!recipe) return;


    let selectedServings =
        recipe.servings;


    renderRecipeModal(
        recipe,
        selectedServings
    );

}


// =====================================================
// RENDER RECIPE MODAL
// =====================================================

function renderRecipeModal(
    recipe,
    selectedServings
) {

    const oldModal =
        document.querySelector(
            ".recipe-modal-overlay"
        );


    if (oldModal) {

        oldModal.remove();

    }


    const recipeName =
        currentLanguage === "zh"
            ? recipe.nameZh
            : recipe.name;


    const description =
        currentLanguage === "zh"
            ? recipe.descriptionZh
            : recipe.description;


    const difficulty =
        currentLanguage === "zh"
            ? recipe.difficultyZh
            : recipe.difficulty;


    const methodData =
        getRecipeMethodData(recipe);

    const steps =
        methodData &&
        (
            currentLanguage === "zh"
                ? methodData.stepsZh
                : methodData.steps
        )
            ? (
                currentLanguage === "zh"
                    ? methodData.stepsZh
                    : methodData.steps
            )
            : (
                currentLanguage === "zh"
                    ? recipe.stepsZh
                    : recipe.steps
            );

    const recipeTime =
        methodData && methodData.time
            ? methodData.time
            : recipe.time;

    const activeMethod =
        selectedCookingMethod !== "all" &&
        recipeSupportsMethod(
            recipe,
            selectedCookingMethod
        )
            ? selectedCookingMethod
            : (
                methodData
                    ? Object.keys(recipe.cookingMethods || {})[0]
                    : null
            );


    const servingsText =
        currentLanguage === "zh"
            ? "份量"
            : "Servings";


    const ingredientsText =
        currentLanguage === "zh"
            ? "所需食材"
            : "Ingredients";


    const stepsText =
        currentLanguage === "zh"
            ? "烹饪步骤"
            : "Cooking Steps";


    const videoText =
        currentLanguage === "zh"
            ? "观看烹饪视频"
            : "Watch Cooking Video";


    const videoDescription =
        currentLanguage === "zh"
            ? "想看看实际怎么做？观看相关烹饪教程。"
            : "Want to see how it's made? Watch a related cooking tutorial.";

    const methodVideoUrl =
        activeMethod &&
        methodData &&
        methodData.video
            ? methodData.video
            : (
                recipe.video
                    ? recipe.video.url
                    : null
            );


    const modal =
        document.createElement("div");


    modal.classList.add(
        "recipe-modal-overlay"
    );


    modal.innerHTML = `

        <div class="recipe-modal">

            <button
                class="close-modal"
                aria-label="Close">
                ×
            </button>


            <div class="modal-hero">

                <div class="modal-emoji">
                    ${recipe.emoji}
                </div>


                <div>

                    <p class="modal-label">
                        ${
                            currentLanguage === "zh"
                                ? "食谱"
                                : "RECIPE"
                        }
                    </p>


                    <h2>
                        ${recipeName}
                    </h2>


                    <p>
                        ${description}
                    </p>

                </div>

            </div>


            <div class="modal-info">

                <span>
                    ⏱ ${recipe.time} min
                </span>

                <span>
                    👤
                    ${
                        currentLanguage === "zh"
                            ? "份量"
                            : "Servings"
                    }:

                    <select
                        id="servingsSelect">

                        <option value="1"
                            ${
                                selectedServings === 1
                                    ? "selected"
                                    : ""
                            }>
                            1
                        </option>

                        <option value="2"
                            ${
                                selectedServings === 2
                                    ? "selected"
                                    : ""
                            }>
                            2
                        </option>

                        <option value="3"
                            ${
                                selectedServings === 3
                                    ? "selected"
                                    : ""
                            }>
                            3
                        </option>

                        <option value="4"
                            ${
                                selectedServings === 4
                                    ? "selected"
                                    : ""
                            }>
                            4
                        </option>

                        <option value="5"
                            ${
                                selectedServings === 5
                                    ? "selected"
                                    : ""
                            }>
                            5
                        </option>

                        <option value="6"
                            ${
                                selectedServings === 6
                                    ? "selected"
                                    : ""
                            }>
                            6
                        </option>

                    </select>

                    ${
                        currentLanguage === "zh"
                            ? "人"
                            : ""
                    }

                </span>


                <span>
                    ${
                        recipe.difficulty === "Easy"
                            ? "🟢"
                            : "🟡"
                    }

                    ${difficulty}
                </span>

                ${
                    activeMethod
                        ? `
                            <span>
                                ${
                                    cookingMethods[activeMethod]
                                        ? cookingMethods[activeMethod].icon
                                        : "🍳"
                                }
                                ${
                                    getMethodLabel(activeMethod)
                                }
                            </span>
                        `
                        : ""
                }

            </div>


            <!-- INGREDIENTS -->

            <div class="modal-section">

                <h3>
                    ${ingredientsText}
                </h3>


                <div class="recipe-ingredient-list">

                    ${
                        recipe.ingredients
                            .map(
                                ingredient => {

                                    const data =
                                        formatRecipeIngredient(
                                            {
                                                ...ingredient,
                                                recipe
                                            },
                                            selectedServings
                                        );


                                    const isAvailable =
                                        selectedIngredients.includes(
                                            ingredient.name
                                        );


                                    return `

                                        <div
                                            class="recipe-ingredient-row
                                            ${
                                                isAvailable
                                                    ? "ingredient-available"
                                                    : "ingredient-missing"
                                            }">

                                            <span>

                                                <strong>
                                                    ${
                                                        isAvailable
                                                            ? "✓"
                                                            : "✕"
                                                    }
                                                </strong>

                                                ${data.name}

                                            </span>


                                            <span>

                                                ${data.quantity}
                                                ${data.unit}

                                            </span>

                                        </div>

                                    `;

                                }
                            )
                            .join("")
                    }

                </div>

            </div>


            <!-- COOKING STEPS -->

            <div class="modal-section">

                <h3>
                    ${stepsText}
                </h3>


                <ol class="cooking-steps">

                    ${
                        steps
                            .map(
                                step => `
                                    <li>
                                        ${step}
                                    </li>
                                `
                            )
                            .join("")
                    }

                </ol>

            </div>


            <!-- VIDEO -->

            <div class="recipe-video">

                <div class="video-icon">
                    🎥
                </div>


                <div>

                    <h3>
                        ${
                            currentLanguage === "zh"
                                ? "视频教程"
                                : "Video Tutorial"
                        }
                    </h3>


                    <p>
                        ${videoDescription}
                    </p>


                    ${
                        methodVideoUrl
                            ? `
                                <a
                                    href="${methodVideoUrl}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="video-button">

                                    ▶ ${videoText}

                                </a>
                            `
                            : `
                                <p class="no-video">
                                    ${
                                        currentLanguage === "zh"
                                            ? "暂无合适的视频，但完整的文字食谱已经提供。"
                                            : "No suitable video is available, but the complete recipe is provided above."
                                    }
                                </p>
                            `
                    }

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    // =================================================
    // CLOSE
    // =================================================

    modal.querySelector(
        ".close-modal"
    ).addEventListener(
        "click",
        () => {

            modal.remove();

        }
    );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                modal.remove();

            }

        }
    );


    // =================================================
    // SERVING CHANGE
    // =================================================

    modal.querySelector(
        "#servingsSelect"
    ).addEventListener(
        "change",
        event => {

            renderRecipeModal(
                recipe,
                Number(
                    event.target.value
                )
            );

        }
    );

}


// =====================================================
// DISPLAY INGREDIENT NAME
// =====================================================

function getDisplayedIngredient(
    ingredientName
) {

    const ingredient =
        getAllIngredients().find(
            item =>
                item.name === ingredientName
        );


    if (!ingredient) {

        /*
           Some recipe ingredients may not yet
           exist in the ingredient selector.
        */

        return ingredientName;

    }


    return getIngredientName(
        ingredient
    );

}

// =====================================================
// LANGUAGE SWITCH
// =====================================================

function changeLanguage(language) {

    if (language !== "en" && language !== "zh") {
        return;
    }

    currentLanguage = language;

    document.documentElement.lang =
        language === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (
            translations[language] &&
            translations[language][key] !== undefined
        ) {
            element.textContent =
                translations[language][key];
        }

    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key =
            element.getAttribute("data-i18n-placeholder");

        if (
            translations[language] &&
            translations[language][key] !== undefined
        ) {
            element.placeholder =
                translations[language][key];
        }

    });

    if (englishBtn) {
        englishBtn.classList.toggle(
            "active",
            language === "en"
        );
    }

    if (chineseBtn) {
        chineseBtn.classList.toggle(
            "active",
            language === "zh"
        );
    }

    displayIngredients(
        getFilteredCategories(
            ingredientSearch
                ? ingredientSearch.value
                : ""
        )
    );

    displaySelectedIngredients();

    document.querySelectorAll(
        ".cooking-method-item"
    ).forEach(button => {
        button.classList.toggle(
            "active",
            (button.dataset.method || "all") ===
            selectedCookingMethod
        );
    });

    if (
        typeof displayRecipes === "function" &&
        selectedIngredients.length > 0
    ) {
        displayRecipes();
    }
}

// =====================================================
// APP INITIALIZATION
// =====================================================

function initializeApp() {

    // =================================================
    // GET ELEMENTS
    // =================================================

    ingredientSearch =
        document.getElementById(
            "ingredientSearch"
        );


    englishBtn =
        document.getElementById(
            "englishBtn"
        ) ||
        document.getElementById(
            "enBtn"
        ) ||
        document.querySelector(
            '[data-language="en"]'
        );


    chineseBtn =
        document.getElementById(
            "chineseBtn"
        ) ||
        document.getElementById(
            "zhBtn"
        ) ||
        document.querySelector(
            '[data-language="zh"]'
        );


    findRecipesBtn = document.getElementById("findRecipesBtn");


    // =================================================
    // SEARCH
    // =================================================

    if (ingredientSearch) {

        ingredientSearch.addEventListener(
            "input",
            event => {

                displayIngredients(
                    getFilteredCategories(
                        event.target.value
                    )
                );

            }
        );

    }


    // =================================================
    // ENGLISH BUTTON
    // =================================================

    if (englishBtn) {

        englishBtn.addEventListener(
            "click",
            () => {

                changeLanguage(
                    "en"
                );

            }
        );

    }


    // =================================================
    // CHINESE BUTTON
    // =================================================

    if (chineseBtn) {

        chineseBtn.addEventListener(
            "click",
            () => {

                changeLanguage(
                    "zh"
                );

            }
        );

    }


    // =================================================
    // FIND RECIPES
    // =================================================

    if (findRecipesBtn) {

        findRecipesBtn.addEventListener(
            "click",
            () => {

                if (!recipesReady) {
            return;
        }

        displayRecipes();


                const recipesSection =
                    document.getElementById(
                        "recipes"
                    );


                if (recipesSection) {

                    recipesSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // =================================================
    // INITIAL DISPLAY
    // =================================================

    displayIngredients(
        ingredients
    );


    displaySelectedIngredients();

    initializeCookingMethods();

}


// =====================================================
// START APPLICATION AFTER HTML LOADS
// =====================================================

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        () => {
            initializeApp();
            loadRecipes();
        }
    );

} else {

    initializeApp();
    loadRecipes();

}
