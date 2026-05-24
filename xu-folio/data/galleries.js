/* ===========================================================
   朱师傅 · 匠心装修 — gallery content
   Edit this file to change photos and captions. Plain JS object.
   Each image: { file, phase, room:{zh,en}, caption:{zh,en} }
     - file:  image name WITHOUT extension, e.g. "a-01" -> img/property-a/a-01.jpg
     - phase: "before" | "after" | "detail" | null  (shows a small badge)
   NOTE: the two `airbnb` links are a best guess at which photo set goes
   with which listing — swap them if a gallery points to the wrong room.
   =========================================================== */

window.GALLERIES = [
  {
    id: "property-a",
    eyebrow: { zh: "作品一", en: "Project One" },
    title: {
      zh: "民宿一号 · 明亮开阔的现代小宅",
      en: "Rental No.1 · A Bright, Open Modern Home"
    },
    intro: {
      zh: "推开门，是一整片连通的光。朱师傅打掉了原本割裂的隔墙，让厨房、餐厅与客厅在同一片日光里舒展开来——简洁的灰色橱柜、温润的木纹地板，住进来的人都说，这里像家，又比家更松弛。",
      en: "Open the door and the whole room breathes light. Master Zhu took down the walls that once chopped the space apart, letting the kitchen, dining and living areas stretch out under one warm wash of daylight. Soft grey cabinetry, gentle wood-grain floors — guests say it feels like home, only easier."
    },
    airbnb: "https://www.airbnb.com/rooms/1252606386506815453",
    images: [
      {
        file: "a-01", phase: null,
        room: { zh: "开放式起居空间", en: "Open Living Space" },
        caption: {
          zh: "一眼望穿的开阔，是拆改时反复斟酌的结果。承重之外的墙体被悉数打通，沙发、餐桌与厨房各安其位，却又彼此相望——光从两端涌入，落在哑光灰橱柜和浅木地板上，安静又温柔。",
          en: "That clean, unbroken sightline took real deliberation on the job site. Every non-load-bearing wall came down, so the sofa, the table and the kitchen each have their place yet still face one another. Light pours in from both ends and settles softly on matte-grey cabinets and pale wood floors."
        }
      },
      {
        file: "a-02", phase: null,
        room: { zh: "餐厨与客厅", en: "Dining & Living" },
        caption: {
          zh: "餐桌摆好了碗筷，转身就是松软的布艺沙发。墙上挂式空调送来恰好的凉意，吊顶里的筒灯均匀洒下暖光——朱师傅把电路和管线都藏进了墙里，眼睛能看到的，只剩干净。",
          en: "Set the table for dinner and the soft upholstered sofa is just a turn away. A wall-mounted mini-split keeps the air just right while recessed downlights spill an even, warm glow. Master Zhu buried every wire and pipe inside the walls — all that's left for the eye is calm."
        }
      },
      {
        file: "a-03", phase: null,
        room: { zh: "餐厨一角", en: "Kitchen & Dining Corner" },
        caption: {
          zh: "清晨的一杯咖啡，最配这扇窗下的餐桌。灰色平板门橱柜配上仿大理石纹饰面墙砖，台面是耐磨的石英石——既经得起一日三餐的烟火，也经得起镜头的端详。",
          en: "A morning coffee belongs right here, at the table under the window. Flat-panel grey cabinets meet a marble-look tiled wall, and the counters are hard-wearing quartz — ready for the bustle of three meals a day, and just as ready for a closer look."
        }
      },
      {
        file: "a-04", phase: "detail",
        room: { zh: "厨房", en: "The Kitchen" },
        caption: {
          zh: "L 形的动线，是站在灶台前反复比划出来的。不锈钢电陶炉、抽拉龙头、嵌入式洗碗机一应俱全；橱柜的每一道接缝都对得齐整，抽屉推拉之间，是二十年手感的分寸。",
          en: "The L-shaped layout was paced out again and again right in front of the range. A stainless electric range, a pull-down faucet, a built-in dishwasher — everything where a cook would want it. Every cabinet seam lines up true, and the drawers glide with the precision of twenty years' practice."
        }
      },
      {
        file: "a-05", phase: null,
        room: { zh: "主卧", en: "Master Bedroom" },
        caption: {
          zh: "卧室留白得很慷慨。一张软包大床、一盏黄色小几，墙上一幅雪山——朱师傅说，卧室不必塞满，留点空，才睡得踏实。仿木地板踩上去微微温润，窗上的斑马帘把日光滤成柔和的一层。",
          en: "The bedroom is generous with empty space. A soft upholstered bed, a little yellow side table, a snow-mountain print on the wall — a bedroom needn't be crammed, Master Zhu likes to say; leave it some air and you'll sleep the deeper for it. The wood-look floor is warm underfoot, and zebra shades strain the daylight into a soft, even veil."
        }
      },
      {
        file: "a-06", phase: null,
        room: { zh: "次卧", en: "Second Bedroom" },
        caption: {
          zh: "第二间卧室小而周到。同样的浅色地板、同样齐整的踢脚线，灰格纹的床品安静利落。空间不大，却没有一处将就。",
          en: "The second bedroom is small but thoughtful. The same pale floors, the same crisply mitred baseboards, bedding in a quiet grey check. Not a large room — but not a single corner left to 'good enough.'"
        }
      },
      {
        file: "a-07", phase: null,
        room: { zh: "卫浴", en: "The Bathroom" },
        caption: {
          zh: "卫生间是最见功夫的地方。大块仿云石墙砖拼得严丝合缝，淋浴房的玻璃推门顺滑无声，深色马赛克地砖防滑又利落。台盆、镜柜、安全扶手各就各位——看似简单，背后是水电、防水、找平一道道工序的较真。",
          en: "A bathroom is where craft shows itself most. Large marble-look wall tiles meet seam to seam, the glass shower door slides without a sound, and dark mosaic floor tile is both sure-footed and sharp. Vanity, mirror cabinet and grab bar each in their place — simple to look at, but built on layer after careful layer of plumbing, waterproofing and leveling."
        }
      }
    ]
  },
  {
    id: "property-b",
    eyebrow: { zh: "作品二", en: "Project Two" },
    title: {
      zh: "民宿二号 · 暖意复式宅邸",
      en: "Rental No.2 · A Warm Two-Story Retreat"
    },
    intro: {
      zh: "这是一栋两层的小宅，木色与白色交织，处处透着暖意。从黄昏亮灯的露台，到楼梯扶手上每一根铁艺立柱，朱师傅把“住得舒服”四个字，落进了每一处看得见、看不见的细节里。",
      en: "This is a two-story home where wood tones and white weave together into something warm all over. From the deck glowing at dusk to every wrought-iron baluster on the staircase, Master Zhu poured the idea of living well into every detail — the ones you notice, and the ones you never will."
    },
    airbnb: "https://www.airbnb.com/rooms/1199645525624502163",
    images: [
      {
        file: "b-01", phase: null,
        room: { zh: "暮色中的小院", en: "The House at Dusk" },
        caption: {
          zh: "天色将暗，露台的灯一盏盏亮起来。木质栏杆顺着屋子的轮廓铺展，廊下的暖光漫到草坪上——这栋两层小宅在暮色里安静地发着光，像在等人回家。",
          en: "As the sky dims, the deck lights come on one by one. The timber railing follows the contour of the house, and the warm light beneath the eaves spills onto the lawn. In the dusk this two-story home glows quietly — as if waiting for someone to come home."
        }
      },
      {
        file: "b-02", phase: null,
        room: { zh: "客厅", en: "The Living Room" },
        caption: {
          zh: "层高很慷慨，光也很慷慨。浅色橡木地板一路延伸到落地推拉门前，米色转角沙发松软地围出一方天地，推开门便是满眼绿意的露台。",
          en: "The ceilings are generous, and so is the light. Pale oak floors run all the way to the sliding glass doors, a beige sectional folds softly around its own little world, and one step through the doors is a deck full of green."
        }
      },
      {
        file: "b-03", phase: null,
        room: { zh: "壁炉一隅", en: "By the Fireplace" },
        caption: {
          zh: "电壁炉嵌在白色矮柜里，暖光跳动，墙上唱片与霓虹灯牌随性而挂。橡木地板的纹理在自然光下格外好看——这是一处让人想窝下来待一整晚的角落。",
          en: "An electric fireplace sits tucked into a low white console, its glow flickering beneath records and a casual neon sign. The grain of the oak floor looks its best in the daylight — this is the kind of corner you'd happily curl up in for a whole evening."
        }
      },
      {
        file: "b-04", phase: null,
        room: { zh: "通往露台", en: "Toward the Deck" },
        caption: {
          zh: "格栅推拉门把户外的树影请了进来。坐在沙发上，目光越过软凳，正好落在那片刷成红色的木露台上——室内与室外，被一道干净的门槛温柔地连在一起。",
          en: "The gridded sliding doors invite the shade of the trees indoors. From the sofa, your gaze travels past the ottoman and lands on the red-painted timber deck beyond — inside and out, joined gently by one clean threshold."
        }
      },
      {
        file: "b-05", phase: null,
        room: { zh: "楼梯与厨房", en: "Staircase & Kitchen" },
        caption: {
          zh: "橡木踏步配黑色铁艺栏杆，一级一级稳稳向上。楼梯的收口、扶手的弧度，都是朱师傅亲手打磨的地方；转角望去，便是那间暖色调的双色厨房。",
          en: "Oak treads and black wrought-iron balusters climb steadily, step by step. The way each tread is finished, the curve of the handrail — these are the places Master Zhu shaped by hand. Turn at the landing and the warm two-tone kitchen comes into view."
        }
      },
      {
        file: "b-06", phase: null,
        room: { zh: "餐厨空间", en: "Kitchen & Dining" },
        caption: {
          zh: "专业级六头燃气灶、宽大的不锈钢抽油烟机，是为真正爱下厨的人准备的。原木下柜与白色吊柜上下呼应，飘窗旁那组金腿绒面餐椅，则把烟火气衬得格外体面。",
          en: "A pro-style six-burner gas range and a broad stainless hood — made for someone who truly loves to cook. Natural-wood base cabinets answer white uppers above, while the gold-legged velvet chairs by the bay window lend the everyday bustle a quiet elegance."
        }
      },
      {
        file: "b-07", phase: null,
        room: { zh: "双色厨房", en: "Two-Tone Kitchen" },
        caption: {
          zh: "白色上柜、原木下柜，是这间厨房最耐看的搭配。仿大理石台面与同纹理的墙面一气呵成，窗外绿植映进来，连备餐都成了享受。",
          en: "White uppers, natural-wood base cabinets — the pairing that makes this kitchen so easy on the eye. The marble-look counters flow seamlessly into a matching backsplash, greenery leans in at the window, and even prepping a meal becomes a pleasure."
        }
      },
      {
        file: "b-08", phase: "detail",
        room: { zh: "厨房细节", en: "Kitchen Detail" },
        caption: {
          zh: "一只大号不锈钢围裙水槽，配上抽拉式龙头，洗洗刷刷都痛快。台面与墙面的拼缝、龙头底座的密封，朱师傅都收得一丝不苟——好厨房，是从这些看不见的地方开始的。",
          en: "A big stainless apron-front sink paired with a pull-down faucet makes the washing-up a joy. The joint where counter meets wall, the seal around the faucet base — Master Zhu finished them all without a single shortcut. A good kitchen begins in the places no one thinks to look."
        }
      },
      {
        file: "b-09", phase: null,
        room: { zh: "卧室", en: "Bedroom" },
        caption: {
          zh: "顶上的石膏线脚，是这栋老宅保留下来的体面。灰色软包床配橄榄绿床盖，阳光透过白格窗洒在地板上——朱师傅没有抹去房子的年岁，而是把它擦得发亮。",
          en: "The crown molding overhead is a piece of this older home's dignity, kept and restored. A grey upholstered bed, an olive-green coverlet, sunlight falling across the floor through a white-grid window — Master Zhu didn't erase the house's age, he polished it until it shone."
        }
      },
      {
        file: "b-10", phase: null,
        room: { zh: "主卫", en: "Master Bath" },
        caption: {
          zh: "独立浴缸静静立在窗边，一整面木格栅墙把卫生间衬得像间小小的汤屋。白色双台盆、哑光黑龙头、椭圆镜，繁简之间拿捏得刚刚好——这是属于一天结束时的犒赏。",
          en: "A freestanding tub stands quietly by the window, and a full wall of wood slats gives the room the air of a private little bathhouse. A white double vanity, matte-black fixtures, an oval mirror — the balance of plain and refined judged just right. This is the reward waiting at the end of a long day."
        }
      },
      {
        file: "b-11", phase: null,
        room: { zh: "客卫", en: "Guest Bath" },
        caption: {
          zh: "白色长条墙砖之间，嵌进一道闪着银灰光泽的玻璃马赛克腰线，低调里藏着心思。哑光黑龙头与金纹石材台面相撞，六角地砖细密铺开——小小一间客卫，也讲究得很。",
          en: "Between white plank-set wall tiles runs a single band of shimmering silver-grey glass mosaic — a quiet flourish with real intent. Matte-black fixtures play against a gold-veined stone vanity top, and hexagon floor tile spreads out fine and tight. Even the little guest bath is full of care."
        }
      },
      {
        file: "b-12", phase: null,
        room: { zh: "淋浴间", en: "Shower Room" },
        caption: {
          zh: "亚麻肌理的墙砖温柔不反光，玻璃马赛克腰线横贯其间，鹅卵石地面踩上去带着按摩般的触感。推拉玻璃门干净利落，把干湿利索地分开——朱师傅说，防水做到位，住十年都不返工。",
          en: "Linen-textured wall tile stays soft and glare-free, a glass-mosaic band running straight across it, while the pebbled floor gives a faintly massaging touch underfoot. The sliding glass door is crisp and clean, keeping wet and dry neatly apart. Get the waterproofing right, Master Zhu says, and you won't touch it again for ten years."
        }
      }
    ]
  }
];
