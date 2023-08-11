'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "75f398439fe13d7d171492cf79ede47d",
".git/config": "aace6f82657e511f4c2a7fee2bdf57e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4200bf517adcb441cf06f9633dff1c84",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d4a5c5d9468e6c1df2c5f80fb6c898bc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "722bf786137812d96ddc824699dc2a6b",
".git/logs/refs/heads/main": "397ac4aa2ac7f1325c73c8f79ea3c7ab",
".git/logs/refs/heads/master": "bd8a8e9804c30356263b72710ed2fdc4",
".git/logs/refs/remotes/origin/main": "cda056d63205cb34cc9adb3048bf9586",
".git/objects/01/742cac73cd4e41e008d34195053f6fc32cbb46": "f73c3bc9fa1555776017daa9a010705c",
".git/objects/03/7d4295436e7924a1c3e94026d6a70699e43a4b": "fc9bc0cb2b74460ef7f66733e00fc40a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/bb56b6ccaafee9f302a77695918b672386d127": "6429af37fb2b99eb3af8b5a140591155",
".git/objects/06/abe5d8dc25435fd399442f8e551a4de6b9e93b": "9d311f0f033197e533f939ac355da159",
".git/objects/06/bf841e44e92f6fce4ac5a09fff1e607b4f180b": "fef998d1af0e0dd8306abdaccbfe4afd",
".git/objects/07/753c1063d2ac2945d4506e633f627eadc2a89d": "5ec3b7dc1d854604428cabc6d280580c",
".git/objects/07/ddbe603fd6126ad968704e750f39765436233a": "d544ebbf1e9d86c72e1202a0c1ef5e8b",
".git/objects/0a/8bc02bc1a388d72ef77160b64486b2bc84653e": "cc973732e744f5b6d4c41f62fb9cc120",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/50a413fb4b07cb97aa232f37f49bc342356b5d": "c6f0526cfba97e76c691eb4b96377ca0",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/0e/f4fb208567e4125b7c09d3d6bc4f2496ab3891": "fde5d29851c1af02c1e6b218ffbb2c82",
".git/objects/0f/841398efcc1de381fb77891479405a92b3eeaa": "54828449d6116002fc632f4405c406e7",
".git/objects/14/d57478b7e6cf3725cfadb7f218d69fb77a167c": "e53fbbb8f84de1368fb2053f4139dc85",
".git/objects/16/e6a1f72fd1cd86bf8ebfa4df43382c510e39c7": "6db82288608ea986a14003d4d202240e",
".git/objects/17/1ba076b19e355ce3928f9fbb07c5263582a062": "031cfe022ce80821d2d5d604b443b9b4",
".git/objects/17/4f275620a35430871e515d1dead86c50e73c5a": "f22e518cdb52272eb987aa259f16d158",
".git/objects/18/4b093463dc502e781f17d90279bbc229b1d78f": "0934cdbbeb9ea25bbf78509a66bd390f",
".git/objects/18/8e0df09974bf6b5186462b5bc96a1b0c45a7bc": "d890c94f20268e805fe6bba4d50abfad",
".git/objects/19/a19bbe6e057ec14e4cb846defdf4994263d5ce": "c4766cbffb00364f66f1b87e92c0e835",
".git/objects/19/b80a1e589317b36757b0324412ed8cfecb3a24": "45d090c5091df9ee72ecad58d61680a7",
".git/objects/1b/ca8f86a50686b2d86351dc5cc5485302f09bf4": "20362de75c06a2e00a866b344d3bd03c",
".git/objects/1b/d031e7797d69613e9ce7f614386780bd0094e7": "7a46a1537d6cca77cf58fd06e7ba2b6e",
".git/objects/1b/ea53e8b6a2094fc6d6379030230f8bfecea0bd": "8b6e21f20521e3a054c2c4668138e880",
".git/objects/1c/da490e4835a5c566e1cbec06a750ddb373af90": "6cc050592e37d34210bd5cd4b5fa1bea",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/82cf4a52e7fa731023302e367c1152be2924e1": "38930068c697c4ee5c5f0e58770a7ed3",
".git/objects/1d/bcd20170933279eb43b4d42004f513e73b62c8": "fb5954b805185a41e04ca248ba92578c",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/20/7a74dba82d6f6eac740ab2cefceedfb118a416": "ffd3e2f791268ae57a12778000fde60b",
".git/objects/20/b315b90475e969d51c1c8a9b13446e2144a2a0": "271a493fa38d8f41779c0cfdf374476b",
".git/objects/21/0fb6186909490df0aa7dd3ea991d53d7f359c0": "06db31ae6e3d3cc82f77dc1e91e7df9e",
".git/objects/21/4add4e02b11a38700b539307b21b3937cb100b": "193eb8c252125b86beef157726b780b8",
".git/objects/23/21ea46cf17510d0178c32cb562016828a3c0f8": "277cca1cd171e612297dc3b77ced6f25",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/30f52dac54b632ab0377f26e734b8aeafc5e23": "2cbd36c13a9126d09c01c3b9453ecacd",
".git/objects/27/6f6ab734dc41c3ae1f40b6e6253f578e2e210f": "ab0f1682a7195e731da3046a7d9abd7e",
".git/objects/27/8c2e6093b6699e01424bd00233bd2f506c92de": "929c96cf7762772da01c2dae7ef65a72",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/29/5f5a0cdfefa23270d4d8ae6578b12095a3a470": "d39d9f9dd55f49414096862a64c0fd48",
".git/objects/2a/e313b64501d45bcd84950faa4e896405259b61": "82766870c41380bb38d77595a82d727f",
".git/objects/2c/01bdd21e127fe917e68e967f28c88d7b41f8e3": "0d2d098936753da715c4e040f438a26d",
".git/objects/2c/cdaec991d3307991eebfb50b2dc88a4c0f3f32": "48e8d4f7b11747a2bb5f84f51f2f988f",
".git/objects/2d/8aa2382d3b80ce8a2564d180b08c08fe989e0d": "e7ca4266cab3d762cda625d260670f2e",
".git/objects/2d/c3a960b48e85b347eb8ea268d13710fd2b77ab": "ca86cdba0554d24a453cd8fe850eed47",
".git/objects/2f/bab700abab7df33b6cbb486ba378eebeac736e": "77e07fcf8e81dce3c03cd9b7ea0842c5",
".git/objects/32/6923823d24505d269cd6f116f4184e58b2fcac": "f9714195d94bf5c805073d6c923368c5",
".git/objects/32/b9e387d84a5585653dbe4d7d31b1d45bfce258": "339cbf5461e2cf587372cbfe17612d2f",
".git/objects/32/f4c72cbbb60699a238ccd70de236665f39851a": "5c0e81246c83ea2b5e685e89280b327c",
".git/objects/33/0aa94a928dddcf4698e6ba85896072d3b19479": "b8abd4a5b47855bf134cf83fe542127e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/3c0ebca7a396309a9bf94865b07c692b7932ec": "cb3f7c4de11d7eb9d0c23e2f0f7b2553",
".git/objects/36/e4033dfd00f79b5b4af86114309dfceb01165d": "e210fa1225d28b4ca19d0d6905250dbb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/5904c0ae31bcdd690178aedb481d9873a96afd": "37aee328a03ffc26a3bd2295863fd29c",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/c0a64b06e09e3bb040c76104bf8998b8421bfc": "1bbbdabd056b4d2a1deb3029add56b11",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/73b92f937cd5a5e5e4a7414b4ab80038231bc2": "e72cb85b2dfbef43a631ed1ca8186cc3",
".git/objects/3c/0e2a3ae40a85baf8b3dd8215b3a8b7363cc4dd": "3b1f40f97033bec5d871e63e7eb7a889",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3e/960a38c6574184bea8b7c5a468d29f5062bd53": "57ee5644da0968f507a493a126df3608",
".git/objects/3e/9d62cf85ac4faee108e8e02750334235dc9575": "d28f1eb3b01b3b655f4103727f43fe8f",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/3f/2af42a600349dbcbebdf9ab22771a409257859": "f81c61ab1e0840a1e6fc18a33dcb8d35",
".git/objects/40/331f1c15f4a0998b29759205d06fc71301bf06": "0eba7ca09c299a2077783e012f1c9828",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/c8290205e00f2662fa8f98cfff0b270d990ab6": "276a6138f6a1ac6b07a0933641991390",
".git/objects/42/d8cbafa01f19e589a212f671f0a0f7d3f64d18": "69df8afd432173b3d566bb8cee69e899",
".git/objects/44/e1ccd9ce6a8815552090fb1535c7084d596452": "2218e682c51b1cb8254c69b9bf032be2",
".git/objects/45/72ddc6d7917009d7f1413d0d1ab3203a580fc9": "3d7bdba2bcfb6937f608c7cf614e26d5",
".git/objects/4a/ab8dffcaa7ef4760b89f872494db3aa3283a57": "6e875f06179617e76bd558090e533924",
".git/objects/4d/8be61d67343bf383e6da04e72029e5d572c3ed": "f3b7af77c37120d2329b33cc98970023",
".git/objects/4e/477a28ede2976e44084e8a2aa3f19685864a45": "27b1bee33862756ce253763ae7aa9632",
".git/objects/51/28b5f50e9df61271b36fe4d964e6894121389d": "c73e8719f3e7d4dcec5c1bfa61b6c9b2",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/853bc5b38c7d518770bec2e8a45ed7ff87d61d": "0c558012389a97856410f39cea7bca13",
".git/objects/51/d4264d4ce48c9ae5dbfd6090eda619870c4f6d": "60645e5e2ad5f2a2ff6db43323981bf0",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/53/5aba2c203d7451da9319d737cd1251b21edfc8": "c974ba5189cd19069af836b6dac29eb8",
".git/objects/54/be115c840eca55574070927396449d933a1df6": "c50d9af09c2c64be02c97574a77cd197",
".git/objects/55/cd21ba743b38f2baa19ad74d82a16c69d9b5c9": "f04dd83d651a092f9cdf4ffa43780605",
".git/objects/57/1a9c23f00ce1d5e107c23bd801749bbe0508fc": "c20563999eb6be159543bc57dc990209",
".git/objects/58/d369b44f076c2271ad4e4ab8bb614b3e978a96": "23f7f86d63e3b2f811fa50bf88e3b33c",
".git/objects/59/1d2faa55d6c69f31d7ba3e563d73dc3a132f6e": "1a0e4cb6751baabbf3ebc3c2b0cff160",
".git/objects/5a/3ab2159f145842a8a8b048e0208e07366891f7": "01ea5b866cbdfb10e248c7c16edea256",
".git/objects/5c/ebff6d517e63900e9ecec8fcf089e511e2ac9a": "d0edff92708d06d33607328a339e7e2f",
".git/objects/5d/1c9da7b8c5092c7d6bfcfde9a01c7b1af5c06e": "68287113c82cf3ffa4c63933498d0740",
".git/objects/5e/ccbd5312a79b78d4188c7fd1e53f720d17e479": "834c77e063b58d679ab1d5f84ccd5ab9",
".git/objects/61/eb2d152469f05dfe94ed796ac5a7e9844d0acd": "fd12d16c36a2b3e9230d88b9c7e0ee6a",
".git/objects/62/40e64759ec93362b444e42708853ae9f953400": "05b812ac1ac495df885cd3df9d10effa",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/bd085c18d2239a3f24563867e8a836ced5d8f2": "f5cd6e16d8c49baa6a2495d3908a1509",
".git/objects/62/ebf6d6e4fda1f5ecb32279b3fa0476b6375de0": "d87f5e2a13675790bc6e6f1889f4a69f",
".git/objects/64/444f549a7ca1878d1528768156eab880d24ae9": "07ba937d9e6e721006a0c50ad15c907a",
".git/objects/64/fce8d42db7c4f67307e8490839a2e6917992fd": "de7d388a41d7dbdd1ad32d8a57be1e2a",
".git/objects/67/61f7e9ef54fc51fa2b951ccd5355f8a06f6f5f": "5063cf0bdce86bbdd3a0b223f572ebab",
".git/objects/67/8f7cad9abcb8afa6028a0e5410fc88e69956f1": "66f1af3924d360326f190b8b2c18d3f7",
".git/objects/68/17213896d6208f286f00b83e64f20c9c9f6052": "cc00682162341fdd65d20a042601f8bc",
".git/objects/69/56d6d166afc0f0b9b6fd11dd4031e1b9869a98": "9123bd6c8db269c0e239aaa5e70d5f57",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6a/b1c5b2d4eb50c44aa874be4865e4f604b4481c": "8750932525cba20376fa5d8d33c44341",
".git/objects/6b/f34e6dd3e0d3df2bf85f6bb175c57ca078d5b2": "0853c4dbeda56647a6725cf81cd8ffd9",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6e/93cc8b1875f492d00cccb6b18b2b3a9a90ad27": "c88a0e5d097dbaf68e57f2934e6e43cc",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/1bb55c60a49539fc47cd25917487e750c1c4d9": "c7bed4b7b8c719fd76945e5bdcb2484e",
".git/objects/70/83a6a01c5f6459c23ff10e3275cb24e825a232": "694ef84ccdc11ed0f24c9c311dfecfbd",
".git/objects/72/2b61ffc925515b454ff83bfbdbb8c513232f0c": "a720c457d71ba574920a7c93c4d2c2eb",
".git/objects/74/06069baa17126bb6c28f88dbf914557c1b05a8": "e3701c2b1432baeec9ac418adfb008ee",
".git/objects/75/94dc3c25d9ff4e6fff9fa1e87a2f1d9692642a": "25fa88648baa6aa3558151ba88171f7c",
".git/objects/75/aaea71826c1bdc3283e55bab1e1777479ee7f5": "6eb054665cca62a3f8b607469aec596c",
".git/objects/76/68ae2948e00d2316d6c583b132368aacbbe9bb": "e2cf02145bbfd98853b91e4d3f66e1e1",
".git/objects/77/436488e57b0135c9f3d03b1e8f1c8029b691c4": "814b6b8478b7b0662f76c7f796fec62a",
".git/objects/78/63e5349e31749b393b33e6eeeb59d9d785bac5": "e56bd20599fb403305e589a7d07f5b59",
".git/objects/78/eb1707cff774cca317a2bcdb9ffdaef724f823": "bd8a018d14f0412d4e214e400d5f2b0d",
".git/objects/79/b3385bfd5cad0f453386871856175673a838c3": "66972964c98d2d639a5655c0366e9dac",
".git/objects/79/b3f3c86173fb29c740ae6d1fd7ff3f4ee2f901": "bef5cc39c4b19307b39f5b81d3c340e1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/35714ea9f5a596c99cc598427f724b52d04e0c": "624ce7689aa8d27f5c44dae2d40b48c3",
".git/objects/7c/76c89b31be0a5e732523bd556b8f9eb630f4b7": "766e679215dfb27fd834b5fa62c56335",
".git/objects/7d/23c86af05b2b2b6a19faf7902b92c662cc1ebc": "ba8f9ee5c4179c7022283b251f63dd84",
".git/objects/7e/597b5a4e85a9bf9116c11cc48e563ebb90a05d": "a0f3b1248f34aae79fef1b3d07f918f5",
".git/objects/80/479eaf5695d4ff182563b7068e6e346a8ed6e7": "9370b7405c1ed23577cd6dc945868dcb",
".git/objects/81/0bb206dae1c614a9cda2980eeefbcc461d6d08": "ca7821d44db880ef5920a228988a1975",
".git/objects/81/591bf51fb638e86467efde4fdd7138a52d6cbe": "054d4ab05358032c049cf9866efca56b",
".git/objects/81/6bae980f59551f2c369845fc1e60161c91c92f": "4a82d8730d73feba14f065151230d21e",
".git/objects/81/bf4862d672ad3308230e151bd195a3937b56cf": "efa38a380bd18671a04f6d85434c2484",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/84/bf34eefc5b7f264c8a9cc5d26714e77a59a0d3": "ea25238df09d9f2f329351f6606a4728",
".git/objects/85/8f2f6cbb9e3114400fc279e2030da7d2b2d9f3": "8cf046373e8c97b5c574e875edf2cf3f",
".git/objects/85/d7aa3f779b3d7971c125e2104085aa98f56c54": "bfd7a2eeaa41efa8c16abcc598dcf327",
".git/objects/86/5c9723c0c7a631a9fb94b004bb3dea1e3ec382": "c76f9a3bb90a2d1949c6bf1abc56dd40",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/87/a1ef80748ee74e88c8f2360e88a9ce931ce864": "64467d6803e173c3548cd3b37efa601e",
".git/objects/89/b9418329d07bfaeaef7e682fdcaaa92f842ec0": "a82c22d534f029e4c8886e4ce8ded8be",
".git/objects/8a/97178ca8b6eb12d2a701b0cefc58c21af428b0": "5c4f0a781e9d3263ea2644287ac10d42",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/c004281ec78861a1cdca837de52347be269006": "0f2b6200e026c21a65a8c3435de486f8",
".git/objects/90/776253ff1e466323b9f3122cef541fc0a95ef9": "edd739ea290b2d20a512ddc168942ec0",
".git/objects/90/9cdce8121592fb69318aa7e49c67bc06f2ad17": "efc6b9e7bbd9c11afa5102acd4be5568",
".git/objects/92/0234c32b07ecbf48c26f0f746c563d51a3f6c5": "55c90c35087407ae4ef8f04ad57bbd9c",
".git/objects/93/7ceb5ca5cab7ddc2d41f0800cc903966e2ec8b": "96a1e9ceea158b4a275b50647d67b61c",
".git/objects/93/ef5938f6bf254f739c456a56dda9e03282f70d": "d645801542c0fae9865d6cadfa02a443",
".git/objects/96/e8fe16034fbb26f8d93a1b9c63038d57a6aa6f": "6a4f6e52031721b8b652165cccc1987c",
".git/objects/97/79cdba17cdaede571ef5fac906ddf32336ed7e": "a7bc6c2046983cf97d2b6942b9e64f86",
".git/objects/97/d63e4ed1f74d04f4538454f93bceb8b7bd6567": "775e4d961610735b49936585b8ada871",
".git/objects/9a/03c50ff0e3b25fdf2a4ee681b8604fb726e9ce": "cd5533c99fcf1c9dbe23a7ef520f875f",
".git/objects/9a/9c97dadbcef1d21dbc94c874c857f26c1c5a9f": "d369183c61cb71fdcfd9e31991462d35",
".git/objects/9a/ddb9f6f0311864af2313565a83e951508835f4": "288fadf7ebaf7cb7cf3f7af933876630",
".git/objects/9c/bcc424653ee73235818aea1dea9a718182151d": "5dbdb032ad232e40c8769bd804ee1e55",
".git/objects/9d/040b7f15f8c0aa46c6bcc3cd39949212d0c8c4": "30aafae358b078d49abfe82e73592270",
".git/objects/9e/2ffe835ea17af6f7f4dcb5cae46e0bdfb03539": "b6ef9ec456101b5fd6cf3e476bd8c1d5",
".git/objects/9f/7e6708aa0fc8f36b500fbb118b9f48307c2387": "98f351804bf7c88e90a0348bb4ac2f03",
".git/objects/9f/c2fe6202da1801b585d207990232d121ab48d4": "bb8900821e4127cc00db272a4b7d3f6a",
".git/objects/a0/19221d197ad7c33c9ef34ef89d125827e48de6": "12dc5fed9f72d2a02358f1a0f86d1bb1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/9ef4c75b1e57e02d838e1e53c6de7c12d9580a": "ae59117db14e19e9db3d04f4e750f251",
".git/objects/a2/2d281b9b1366c0a04393dbbeecba183b3e742f": "0e1e51c3f2cc6b0a5ae659bab24af231",
".git/objects/a2/46c12bfbfef573336909f66fd0dda6ea70006e": "d2fef482cad9ef1a757f91960afbe275",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a8/1cc5fd3c101673d93cda14362c06bbd6c0c966": "3a3b133bcaf589f58b391b5810fa39bf",
".git/objects/a8/a3df3341edfd328da385da96c932f33fae6f74": "c1f4eb658d928ea1c928f5a7cf0e296a",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/1d23d5aecee49cb5f2e5b7f19ca5530744afa9": "4d0a8310c570ba3e14aab05d4d1517a3",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/5c9a840460f8622ff5b9e0b2ddcbe751a4e787": "196dfb5b0ec6e1bb99ed7ff041344891",
".git/objects/ae/7d447acca1349b545e0df7867aee5d427571e4": "791f353ea14cd9d0c67635878f15c1ca",
".git/objects/b1/225b2aec27fa0f239e986df22bfa362f2909c9": "8b6ed3c3ac7408a0b485502b1476f3be",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/55c8aacd5db4882f318a3ed25fef955c8b6be8": "5d9c9de86de82cc7674b81fc800625fb",
".git/objects/b2/ef1993a6a93230f82589b1aab0a3a0fb0fabae": "bfcea08996516f757b694cacd65574e7",
".git/objects/b3/18b3dbae8a4489ecdd2b88b8e55b2b44c2c43c": "efd1da659d26623324df70d3e1cbbc7c",
".git/objects/b4/0b2ba36112551b9d2559286343c7f53ab74354": "b15f87f161ea8ce0eab64acfcb739245",
".git/objects/b4/17b8b0c87bac1d6f508677c35428e945251324": "bbe9f422b2461b904f03dd039f3c157d",
".git/objects/b4/bdd64ed7d9776093ebed1737636bd9e1856e8f": "1c2d119bca396c354d6821e516bd5c2a",
".git/objects/b6/170ce23754b064b135718dd20d93a9ac7f64e6": "237b2f7148e23f08ad68d8bd6686f4ae",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/689c097f139f74dcc6e3faec1bc2008f2087a8": "a5380697e1190cedc789996d0d0c659a",
".git/objects/b7/d8548bc714b5005e1e0c8f59bf9409086f8cdf": "8b09b7d446d5fc5a1283424ec0d7453b",
".git/objects/b9/fb4953262447695cf4353ca4305982bf84863b": "60b1c74ea29b8b39f84b3bc882e3d1c8",
".git/objects/ba/37252abaf1a629a1a904a7701c94cd3c9d3a7c": "b6413085ad519eef4f4103d1b8443173",
".git/objects/bb/535f4798bdfde7cad2b11cda9ac6aa181c2186": "191be75ec8ccb4ed561002de93f01594",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/5318b1ab4539a1ca341b6b84164ff7932350c3": "bc3d6ecdda39ac9022efe03f75414ada",
".git/objects/bf/33ef37ed5839d94a4cc74b699962ad6682dfb5": "ba2e3d461996f15d2687ef5295f709da",
".git/objects/bf/4e5e72b384826960cbfc41e318bd025a763f95": "0a298b76b56a0ddc5a8833b8176dfe62",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c1/24271aa17b919c229db008428ac20ba2d556c1": "d05446f5fb60ec8c500cd4cb1dc3efb1",
".git/objects/c1/72ed83e325374d82eca6a0e8cb51ea5c265bd8": "536ebed5adc8ca195cd989b423572770",
".git/objects/c2/06b066d16a4b0c2422b1e94a73b307651a86d6": "98308da9c09afa5c153891fcf705df95",
".git/objects/c4/f3044cdbf488974762c90fdea571f64c30666e": "071d02468398f34eba349d1422414ebf",
".git/objects/c6/b3a90af52ee3c9c4291fff27fdb78d0b9b087f": "221eab91e0f3cb475d1e0dc0365b19bf",
".git/objects/c7/8d753333ef5aaf801b9772d85bf1d26ae63c03": "617880036ab3723c78da64ab8615a7a0",
".git/objects/c7/902d3533ef8190dc7a34a83464c57203385e33": "328dd52ac7fb771b037b7383cbd876f2",
".git/objects/c8/db787e5234e91270dfa6fe87c87492ccf778cf": "e8e2396be814b0b77220588a86e59b14",
".git/objects/cb/cba5d5b2967bb060a18d45472007f2d90811b5": "75e6b463f27df25fd86a459f1ddc34e9",
".git/objects/ce/5c1d0fa7b99171072a14db89dd15f63a537d3a": "3fda0fbd67b96af19026f9bf71771daa",
".git/objects/d0/29d05c0ca18315c65dd548f36753ba8f0ab550": "345e0b941961d5cb310a27bff653d98d",
".git/objects/d3/e7fe32b916cbe7d26679bc36dd940a7d6a7efd": "a2ebd33176d96ae0a0bc70fd0cf4a49d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d7/2687d07019ab0c7707d8d43af3237e188915af": "4ffbea175e529e405ea8db379816d87f",
".git/objects/dc/3373c2cd2c7857769ebd55cf54f9695178c8c3": "123be569a31ad75347d08edc1685f83a",
".git/objects/de/f214c213eb86d83baa273e9ce20e6e798f4581": "2de4de99d5a5f60f6df28cf41b9f062f",
".git/objects/e3/f04ad03cd57345bdeb01eb35187912b0638e11": "d4319c2238da28facc531bc2f6aed029",
".git/objects/e5/5dbe34d50b44f7435d48580d2c629c47ab5dde": "6b35f9ef8dd15ae559869f9a85042433",
".git/objects/e5/61a522382dc1e36a19f0bc04d0cd034f72f2ae": "1dbfd5f5f107e6a3442694262d74e02a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/d1daf4174373868e437d47dc5b5e8047c46851": "bddcbe3f74502747db2aeba6cf0df028",
".git/objects/e6/54f93e03d91cb64a532c7dfb32c8705b222861": "bfdcf82f4d8b2d8be4b6937f4d349e4f",
".git/objects/e6/5df33f413db11fc7817755d58a398e46e2f329": "66008a7af5a95bc36a0be285a44b07c4",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/23999b3bc2fad56db659f37cd7e9601c38922f": "ce3abd3276b947a651e37a3acbcd1e21",
".git/objects/e9/510f678ab44c289d7a1df0956a612b47dc39ef": "ab8d8f44267f2bbd6d26f274459b9e20",
".git/objects/eb/fa9a4978f5d45789a036889c1f3437ee3802db": "bd44a4e2ab320361d4b80d55c2395be1",
".git/objects/eb/fc3e87bc0f75d0162a79429cb5d26c15e3ecc7": "c002f95c51691dd47696df0360317dc1",
".git/objects/ee/855e5d96a3c4a999aff496937fe004d2d37d6f": "5ebd6643bbae094da1aec2235261a59b",
".git/objects/ef/387cc8bcb8d35142a443514a001adc4a5bb7f9": "39f73c63af63332f9dc304f5903ee685",
".git/objects/ef/7c5e063f424c7cf0766fcc8f7d2813f6aaee8f": "f0ec97f13168170fb937323494f4f8a1",
".git/objects/ef/d879c139791a2745fd1cd4b1d41fe5b97bb5f1": "43967e1ed9ab48b5d6ba2f8a60ffa296",
".git/objects/f1/0419024b534393d902a0d641996ba75e0d2855": "e8f812d328823d25100984ec874df7a8",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f2/4117c99c64451cdbf784ba9c28b42fe86840e7": "d14c73c36c2e1dcb8c8f2322675a4019",
".git/objects/f3/47db74458a107509950a172eb37b5f058ac824": "b08e71f41b1dd27ca97518bbba3296ab",
".git/objects/f4/557f7c72c929ff8dccf1153bb21eb6b30bcbe0": "47e2104d29f4c4302cb2e2c8b8ef8282",
".git/objects/f4/6ddd9d2454858ef688c4b32fadea92dbfe6e3c": "b8422df85e962a8098b3c2101192f6c4",
".git/objects/f4/90c3020fb2dc522781446bc70c5565b7b0c570": "f0a0fad92476c7ecebcf69856af4f418",
".git/objects/f4/ab83a2d618cd9b82f87eb75ec4908f14050eff": "217addea24592d9f9e352b4a02970ec1",
".git/objects/f7/87bcdca9993376ebe4d2e520c1c4a346ff6fa0": "126137edfe5c244c4aff672bad0136d9",
".git/objects/f8/388042d7b2b1d6271a44b07df63b451adc59ad": "dc5e07fd51b993d04b30c0e06d162756",
".git/objects/f9/a3d3149338fda8c27a71086aa2793facb22d43": "f68789abcd89e475f363d09be09009da",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fc/baa6d0235d16bf291525a9229d37408ab21b89": "b7643c62d7f80863391eb0f23e6a691d",
".git/ORIG_HEAD": "4f51597135389c9c26aa5ab5c43b91b5",
".git/refs/heads/main": "2cfe4e408f37c11f424df753728efaae",
".git/refs/heads/master": "db0f50b345cc04b716cfc2f0361194aa",
".git/refs/remotes/origin/main": "2cfe4e408f37c11f424df753728efaae",
"assets/AssetManifest.bin": "8435518aaa8d62f16280015063402922",
"assets/AssetManifest.json": "73abd41051a070dabbef33aa39e6deca",
"assets/assets/icon/1024.png": "e1fd802b962fb56375123adad2340df5",
"assets/assets/icon/17cbcece": "e1fd802b962fb56375123adad2340df5",
"assets/assets/icon/foreground.png": "9b3822352868e413d323ebf1f23703ee",
"assets/assets/icons/bed.png": "9f87f536e042d4a43886c51927119995",
"assets/assets/icons/boat-with-containers.png": "2aef6c4f3547c678aa60085fac9d8e39",
"assets/assets/icons/buoy.png": "7dc0bfd768fd6ad95e9749004d5e1aa9",
"assets/assets/icons/conteiner%2520port.png": "023c88b9f27a85e856cc5efd953d7fb2",
"assets/assets/icons/dock.png": "d9c4724d76c8f4b5ff6199ffe7c90853",
"assets/assets/icons/e461ea8d": "291c4fc153ad33b0614882b9e5cb110d",
"assets/assets/icons/fixed.png": "259aa6d704b56547d0b534dd91e977a1",
"assets/assets/icons/flotel.png": "8d18de03b92ea76de54624f40eee9346",
"assets/assets/icons/fpso%25203.png": "f47f5a7bf4ff65f319cd1b8f671b4ea3",
"assets/assets/icons/fpso%2520fill.png": "507bec2c5f8a9d819d3cc541563e731f",
"assets/assets/icons/FPSO.png": "892b3ca7a081c610d0ecd9c8e4471bc8",
"assets/assets/icons/map.png": "291c4fc153ad33b0614882b9e5cb110d",
"assets/assets/icons/offshore-platform.png": "ed930f78da312e87f3493fbd328045b2",
"assets/assets/icons/oil-platform%2520colored.png": "6fcaa0df0fe96532d765e1e19278f8ac",
"assets/assets/icons/oil-platform.png": "1aea446e1f309217ed208dcf65c6a702",
"assets/assets/icons/vessel.png": "7a0e158b8071274846daf3efd9512d46",
"assets/assets/icons/warning.png": "b1e5c9ef2ea556ec3260a2a727725006",
"assets/assets/icons/way.png": "58120c91847a2a7ff2a4f48cb95c8ab8",
"assets/assets/mock/avisos.jpg": "a0cd274fb4c9e33ecb81548cf2662a34",
"assets/assets/mock/cloudy.png": "45ed03d29a618d4cb51d2c008c624946",
"assets/assets/mock/mock_weather.jpg": "a275d9ac61eca628e38d66c23d6de947",
"assets/assets/weather/bussola.png": "891605a5e86b4a92c24c3e92ae3b1940",
"assets/assets/weather/chuvas.png": "0bd05596a4c5618aedb5ed56a2879be2",
"assets/assets/weather/chuva_lua.png": "dcd37459ddb81991b40e6ad26ac1f77e",
"assets/assets/weather/chuva_raios.png": "c03a5c89e69c8ba820a77c8e2e3ec98d",
"assets/assets/weather/chuva_sol.png": "02a6f6abc2eea0266898bdd54323d784",
"assets/assets/weather/frio.png": "48d0f7cd36c10357879969057c8b3ee8",
"assets/assets/weather/granizo.png": "38922b553c44a096eef56f25b39ee983",
"assets/assets/weather/guardachuva.png": "9479f9f9f9e970a66fb9d707df426a0b",
"assets/assets/weather/lua.png": "e675b3f9025497c9051693ea532abb2c",
"assets/assets/weather/nublado.png": "0ebf6a872dda5337c81cefbb984a5799",
"assets/assets/weather/nuvem_lua.png": "c5c7e5c17fad24e700ec53cb8b6ebdd5",
"assets/assets/weather/nuvem_sol.png": "06fe1f0096327f9f91766884b1725b54",
"assets/assets/weather/quente.png": "bf21ff9040758579faecf2accf1b0ee3",
"assets/assets/weather/raios.png": "e9a87a1b959e1261ec41bb66f63de3e3",
"assets/assets/weather/sol.png": "ef92bcfa6034ce9ecba733ef88e786b0",
"assets/assets/weather/umidade.png": "49eb26961b15fefc1dd60ff48c46084c",
"assets/assets/weather/ventos.png": "921997cb9630a82818ade218fef5a7ff",
"assets/assets/weather/vento_granizo.png": "9dc173b1d1f5f1b4eee626bac452ff22",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a35bcb4a43540f17a548787a4fe3344c",
"assets/NOTICES": "5b62396f18ed06f38091ad1ec2e8f524",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "5a0f05139f1d43c603dcfc67d15b1ec9",
"canvaskit/profiling/canvaskit.wasm": "09aacbc0d8b20c7ee684e310703e2d86",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "bf0c119ad5bbd8ab3d18c636ba25d248",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "d4c0e4568baf9b4e275f5bcb541180da",
"icons/Icon-512.png": "46d1256b2c00567151e474dd8dddc772",
"icons/Icon-maskable-192.png": "d4c0e4568baf9b4e275f5bcb541180da",
"icons/Icon-maskable-512.png": "46d1256b2c00567151e474dd8dddc772",
"index.html": "5f43e01eb0ceed5d11c45f9c95918c75",
"/": "5f43e01eb0ceed5d11c45f9c95918c75",
"main.dart.js": "13199da56161b86357939c2abe312e3c",
"manifest.json": "65c35d4b89e5d46959143efa70a76a31",
"splash/img/dark-1x.png": "ed4f484913a1e3a2a1a55fdfcdf3040c",
"splash/img/dark-2x.png": "39449355c91c5710e600a3526dabbffa",
"splash/img/dark-3x.png": "f659b59f3b250ce03747dd8dad19c80f",
"splash/img/dark-4x.png": "4ae554d8d689e98eaa8a98ef28d37417",
"splash/img/light-1x.png": "ed4f484913a1e3a2a1a55fdfcdf3040c",
"splash/img/light-2x.png": "39449355c91c5710e600a3526dabbffa",
"splash/img/light-3x.png": "f659b59f3b250ce03747dd8dad19c80f",
"splash/img/light-4x.png": "4ae554d8d689e98eaa8a98ef28d37417",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8cb430b5c559c4d216d865fb067ee368",
"version.json": "b92093fb147b48e02944a3213cdf3592"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
