const { gql } = require('apollo-server-express');

const typedefs = gql`
    type Query {
        shopHomeFurnishing(p: String): ShopHomeFurnishing!
    }

    type ShopHomeFurnishing {
        categoryName: String!
        homeFurniture: HomeFurniture!
    }

    type HomeFurniture {
        categoryName: String!,
        categories: HomeFurnitureCategories!
        subdepartmentNames: [[String]]
    }

    type HomeFurnitureCategories {
        bedroomFurniture: BedroomFurniture!
        entrywayFurniture: EntrywayFurniture!
        furnitureCollections: FurnitureCollections!
        kidsFurniture: KidsFurniture!
        kitchenAndDinningRoom: KitchenAndDinningRoom!
        livingRoomFurniture: LivingRoomFurniture!
        mattressesAndAccessories: MattressesAndAccessories!
        officeFurniture: OfficeFurniture!
        smallSpaceFurniture: SmallSpaceFurniture!
        tvStandsAndEntertainmentCenters: TVStandsAndEntertainmentCenters!
    }

    type ProductPrice {
        currentPriceFirstType: [String]
        currentPriceSecondType: String
        currentPriceThirdType: String
        currentPriceFourthType: String
    }

    type Options {
        soldAndShippedBy: [String]
        freePickup: [String]
        freePickupToday: [String]
        freeDelivery: [String]
        freeDeliveryOver35: [String]
        unknownOption1: [String]
        unknownOption2: [String]
    }

    type Action {
        addToCart: String
        chooseOptions: String
    }

    type Cart {
        productIs: String
        productTitle: String
        ratings: String
        price: ProductPrice
        options: Options
        action: Action
        imgName: String
        imgURL: String
    }

    # type Pages {
    #     p1: [Cart]
    #     p2: [Cart]
    #     p3: [Cart]
    #     p4: [Cart]
    #     p5: [Cart]
    #     p6: [Cart]
    #     p7: [Cart]
    #     p8: [Cart]
    #     p9: [Cart]
    #     p10: [Cart]
    #     p11: [Cart]
    #     p12: [Cart]
    #     p13: [Cart]
    #     p14: [Cart]
    #     p15: [Cart]
    #     p16: [Cart]
    #     p17: [Cart]
    #     p18: [Cart]
    #     p19: [Cart]
    #     p20: [Cart]
    #     p21: [Cart]
    #     p22: [Cart]
    #     p23: [Cart]
    #     p24: [Cart]
    #     p25: [Cart]
    # }

    type SubcategoryName {
        name: String!
        limit: Int
        page(p: String): [Cart]
    }

    type BedroomFurnitureSubcats {
        bedFramesAndBoxSprings: SubcategoryName!
        bedRisers: SubcategoryName!
        bedroomCollections: SubcategoryName!
        bedroomFurnitureMain: SubcategoryName!
        beds: SubcategoryName!
        benches: SubcategoryName!
        foldingBeds: SubcategoryName!
        headboards: SubcategoryName!
        mattressesAndAccessories: SubcategoryName!
    }

    type BedroomFurniture {
        categoryName: String!,
        subcategories: BedroomFurnitureSubcats!
    }

    type EntrywayFurnitureSubcats {
        benches: SubcategoryName!
        cabinetsAndChests: SubcategoryName!
        coatRacks: SubcategoryName!
        contemporaryHallTrees: SubcategoryName!
        cornerStands: SubcategoryName!
        entrywayFurnitureMain: SubcategoryName!
        farmHouseHallTrees: SubcategoryName
        freestandingCoatRacks: SubcategoryName!
        hallTrees:  SubcategoryName!
        overTheDoorCoatRacks: SubcategoryName!
        shoeCabinets: SubcategoryName!
        traditionalHallTrees: SubcategoryName!
        umbrellaRacksAndStands: SubcategoryName!
        wallMountedCoatRacks: SubcategoryName!
    }

    type EntrywayFurniture {
       categoryName: String!
       subcategories: EntrywayFurnitureSubcats!
    }

    type FurnitureCollectionsSubcats {
        bedroomCollections: SubcategoryName!
        furnitureCollectionsMain: SubcategoryName!
        homeEntertainmentCollections: SubcategoryName!
        kitchenAndDinningCollections: SubcategoryName!
        livingRoomCollections: SubcategoryName!
        officeCollections: SubcategoryName!
    }

    type FurnitureCollections {
        categoryName: String!
        subcategories: FurnitureCollectionsSubcats!
    }

    type KidsFurnitureSubcats {
        bunkBeds: SubcategoryName!
        daycareFurniture: SubcategoryName!
        kidsBedroomSets: SubcategoryName!
        kidsBedsAndHeadboards: SubcategoryName!
        kidsChairsAndSeating: SubcategoryName!
        kidsCollection: SubcategoryName!
        kidsDressersAndArmoires: SubcategoryName!
        kidsFurnitureMain: SubcategoryName!
        kidsLoftBeds: SubcategoryName!
        kidsNightstandAndVanities: SubcategoryName!
        kidsStepStool: SubcategoryName!
        kidsTablesAndChairSets: SubcategoryName!
    }

    type KidsFurniture {
        categoryName: String!
        subcategories: KidsFurnitureSubcats!
    }

    type KitchenAndDinningRoomSubcats {
        bakerRacks: SubcategoryName!
        barStoolsAndCounterStools: SubcategoryName!
        cardTableAndChairSets: SubcategoryName!
        dinningChairs: SubcategoryName!
        foldingChairs: SubcategoryName!
        foldingTables: SubcategoryName!
        foldingTablesAndChairs: SubcategoryName!
        homeBarFurniture: SubcategoryName!
        kitchenAndDinningCollections: SubcategoryName!
        kitchenAndDinningRoomMain: SubcategoryName!
        microwaveCarts: SubcategoryName!
        pubTablesAndSets: SubcategoryName!
        sideboardsAndBuffets: SubcategoryName!
    }

    type KitchenAndDinningRoom {
        categoryName: String!
        subcategories: KitchenAndDinningRoomSubcats!
    }

    type LivingRoomFurnitureSubcats {
        accentChairs: SubcategoryName!
        bookcasesAndBookshelves: SubcategoryName!
        chaiseLounge: SubcategoryName!
        coffeeTables: SubcategoryName!
        consoleAndSofaTables: SubcategoryName!
        endTables: SubcategoryName!
        futons: SubcategoryName!
        livingRoomCollections: SubcategoryName!
        livingRoomFurnitureMain: SubcategoryName!
        loveseats: SubcategoryName!
        sofaBeds: SubcategoryName!
        sofasAndCouches: SubcategoryName!
        tvStandsAndEntertainmentCenters: SubcategoryName!
    }

    type LivingRoomFurniture {
        categoryName: String!
        subcategories: LivingRoomFurnitureSubcats!
    }

    type MattressesAndAccessoriesSubcats {
        futonMattresses: SubcategoryName
        mattressesAndAccessoriesMain: SubcategoryName!
        mattressProtectors: SubcategoryName!
        mattressSets: SubcategoryName!
        mattressToppers: SubcategoryName!
        shopMattressesBySize: SubcategoryName
    }

    type MattressesAndAccessories {
        categoryName: String!
        subcategories: MattressesAndAccessoriesSubcats!
    }

    type OfficeFurnitureSubcats {
        twoOrSixCubeStorageOrganizers: SubcategoryName
        twoDrawerFileCabinets: SubcategoryName
        thirteenInchCubeStore: SubcategoryName
        accessories: SubcategoryName!
        businessOfficeFurniture: SubcategoryName
        ergonomicChairs: SubcategoryName!
        ergonomicDesks: SubcategoryName!
        foldingTablesAndChairs: SubcategoryName!
        elevenInchCubeStore: SubcategoryName!
        officeFurnitureMain: SubcategoryName!
        rollingFileCabinets: SubcategoryName!
        verticalFileCabinets: SubcategoryName!
    }

    type OfficeFurniture {
        categoryName: String!
        subcategories: OfficeFurnitureSubcats!
    }

    type SmallSpaceFurnitureSubcats {
        bedroom: SubcategoryName!
        kitchenAndDinning: SubcategoryName!
        livingRoom: SubcategoryName!
        mattresses: SubcategoryName!
        smallSpaceFurnitureMain: SubcategoryName!
        studyRoom: SubcategoryName!
    }

    type SmallSpaceFurniture {
        categoryName: String!
        subcategories: SmallSpaceFurnitureSubcats!
    }

    type TVStandsAndEntertainmentCentersSubcats {
        audioAndMediaTowers: SubcategoryName!
        blackTvStands: SubcategoryName!
        cornerStands: SubcategoryName!
        entertainmentCenters: SubcategoryName!
        espressoEntertainmentCenters: SubcategoryName!
        espressoTvStands:SubcategoryName!
        farmHouseEntertainmentCenters: SubcategoryName!
        farmHouseTvStands:  SubcategoryName
        flatScreenTvStands: SubcategoryName!
        floatingTvStands: SubcategoryName!
        glassEntertainmentCenters: SubcategoryName!
        glassTvStands: SubcategoryName!
        homeEntertainmentCollections: SubcategoryName!
        homeTheaterSeating: SubcategoryName!
        metalEntertainmentCenters: SubcategoryName!
        metalTvStands: SubcategoryName!
        midCenturyEntertainmentCenters: SubcategoryName!
        modernEntertainmentCenters: SubcategoryName!
        modernTvStands: SubcategoryName!
        oakEntertainmentCenters: SubcategoryName
        oakTvStands: SubcategoryName!
        rusticEntertainmentCenters: SubcategoryName!
        rusticTvStands: SubcategoryName!
        smallEntertainmentCenters: SubcategoryName!
        speakerStands: SubcategoryName!
        tallEntertainmentCenters: SubcategoryName!
        traditionalEntertainmentCenters: SubcategoryName
        tvStands: SubcategoryName
        tvStandsAndEntertainmentCentersMain: SubcategoryName!
        tvStandsWithMount: SubcategoryName!
        tvStandsWithStorage: SubcategoryName!
        tvStandsWithWheels: SubcategoryName!
        wallnutTvStands: SubcategoryName!
        whiteEntertainmentCenters: SubcategoryName!
        whiteTvStands: SubcategoryName!
        woodEntertainmentCenters: SubcategoryName!
        woodTvStands: SubcategoryName!
    }

    type TVStandsAndEntertainmentCenters {
        categoryName: String!
        subcategories: TVStandsAndEntertainmentCentersSubcats!
    }
`;

module.exports = typedefs;
