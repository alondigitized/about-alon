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
      zh: "推开门，是一整片连通的光。朱师傅大手一挥，把碍事的隔墙都给敲了，厨房、餐厅、客厅在同一片日光里铺开——主打一个松弛感。灰调橱柜配原木地板，老钱风拿捏得死死的；住进来的人通常只说四个字：不想走了。",
      en: "Open the door and the whole place is one unbroken sweep of light. Master Zhu knocked out every wall that dared get in the way, so kitchen, dining and living now stretch out under the same daylight — relaxed, unhurried, the good life. Grey cabinets, warm wood floors, quietly expensive-looking. Guests usually say just one thing: I'm not leaving."
    },
    airbnb: "https://www.airbnb.com/rooms/1252606386506815453",
    images: [
      {
        file: "a-01", phase: null,
        room: { zh: "开放式起居空间", en: "Open Living Space" },
        caption: {
          zh: "一眼到底的开阔，是拆改时一砖一瓦量出来的。能拆的墙都拆了，承重墙乖乖留着——朱师傅分得清清楚楚，绝不感情用事。沙发、餐桌、厨房各自站位又互相看得见，光从两头灌进来，治好了不少人的“空间焦虑”。",
          en: "That wide-open, see-it-all sightline was measured out brick by brick. Down came every wall that could go; the load-bearing ones he left well alone — Master Zhu doesn't get sentimental about structural engineering. Sofa, table and kitchen each hold their spot yet keep an eye on one another, and light floods in from both ends. Cures a remarkable amount of small-space anxiety."
        }
      },
      {
        file: "a-02", phase: null,
        room: { zh: "餐厨与客厅", en: "Dining & Living" },
        caption: {
          zh: "餐桌摆好碗筷，一转身就陷进软沙发。挂式空调送来恰到好处的凉，筒灯把暖光撒得均匀——电线水管全被朱师傅塞进墙里，眼不见为净，强迫症看了直呼舒坦。",
          en: "Lay the table, then turn around and sink straight into the sofa. The mini-split keeps the air just so, the downlights spread a warm, even glow, and every wire and pipe is tucked neatly inside the walls — out of sight, out of mind. The neat-freaks among us exhale with relief."
        }
      },
      {
        file: "a-03", phase: null,
        room: { zh: "餐厨一角", en: "Kitchen & Dining Corner" },
        caption: {
          zh: "清晨一杯手冲，最配这扇窗下的小桌。灰色平板柜门配仿大理石墙砖，台面是耐造的石英石——一日三餐的油烟扛得住，发朋友圈的镜头也扛得住，主打一个里子面子都要。",
          en: "A morning pour-over belongs right here, at the little table under the window. Flat grey cabinet doors, a marble-look tiled wall, counters of tough quartz — built to survive three meals' worth of cooking and a photo for the group chat alike. Substance and show, both accounted for."
        }
      },
      {
        file: "a-04", phase: "detail",
        room: { zh: "厨房", en: "The Kitchen" },
        caption: {
          zh: "L 形动线，是朱师傅站在灶台前来回比划磨出来的。电陶炉、抽拉龙头、嵌入式洗碗机一个不少；柜门每道缝都对得齐齐整整，抽屉一推一拉顺滑得很——四十年练出来的手感，处女座来了都得点头：这活儿，挑不出毛病。",
          en: "The L-shaped layout was paced out by Master Zhu, back and forth in front of the range, until it was right. Electric cooktop, pull-down faucet, built-in dishwasher — nothing missing. Every cabinet seam runs dead straight and every drawer glides shut, with the sureness of forty years' practice. Even a card-carrying perfectionist would just nod: nothing to pick at here."
        }
      },
      {
        file: "a-05", phase: null,
        room: { zh: "主卧", en: "Master Bedroom" },
        caption: {
          zh: "卧室留白留得很大方。一张软包大床、一盏小黄灯、墙上一幅雪山——朱师傅的原话是：卧室别堆满，留点空，觉才睡得香。木地板踩着暖，斑马帘把日头滤成柔光，比闹钟温柔多了。",
          en: "The bedroom is generous with breathing room. A plush bed, a little yellow lamp, a snow-mountain print — 'don't cram a bedroom,' as Master Zhu puts it, 'leave it some air and you'll sleep like a baby.' Warm floors underfoot, zebra shades softening the morning sun. Gentler than any alarm clock."
        }
      },
      {
        file: "a-06", phase: null,
        room: { zh: "次卧", en: "Second Bedroom" },
        caption: {
          zh: "第二间卧室，小是小了点，但一点没将就。一样的浅木地板、一样齐整的踢脚线，灰格床品低调耐看——给老人孩子住，还是收拾成客房发朋友圈，全看你心情。",
          en: "The second bedroom is on the small side, but nothing was skimped. Same pale floors, same crisply mitred baseboards, quiet grey-check bedding. Put the kids or the grandparents in it, or stage it for the photos — your call."
        }
      },
      {
        file: "a-07", phase: null,
        room: { zh: "卫浴", en: "The Bathroom" },
        caption: {
          zh: "卫生间最见真章。大块仿云石墙砖拼得严丝合缝，玻璃推门滑起来悄无声息，深色马赛克地砖防滑又利落。台盆、镜柜、扶手各就各位——防水找平这些看不见的功夫做扎实了，住十年不返工，比包工头的承诺靠谱多了。",
          en: "The bathroom is where the truth comes out. Big marble-look wall tiles meet seam to seam, the glass door slides without a whisper, dark mosaic floor tile keeps you sure-footed. Vanity, mirror cabinet and grab bar all in place — and the invisible work, the waterproofing and leveling, is done properly. Ten years, no callbacks — more reliable than most contractors' promises."
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
      zh: "两层的小洋楼，木色和白色搭在一起，从里暖到外。从黄昏亮灯的露台，到楼梯上一根根铁艺栏杆，朱师傅把“住得舒服”这件事做进了每一个看得见和看不见的角落——这种细节，懂的人自然懂。",
      en: "A little two-story house where wood and white warm it through, inside and out. From the deck glowing at dusk to every iron baluster on the stairs, Master Zhu worked the idea of living well into every corner, seen and unseen. If you know, you know."
    },
    airbnb: "https://www.airbnb.com/rooms/1199645525624502163",
    images: [
      {
        file: "b-01", phase: null,
        room: { zh: "暮色中的小院", en: "The House at Dusk" },
        caption: {
          zh: "天一擦黑，露台的灯一盏盏亮起来。木栏杆顺着房子的轮廓铺开，廊下暖光漫到草坪上——这画面往朋友圈一发，点赞收到手软。岁月静好，大概就是这个样子。",
          en: "As dusk settles, the deck lights blink on one by one. The timber railing traces the line of the house, warm light spilling onto the lawn. Post this picture and watch the likes roll in. So this is the quiet good life everyone keeps going on about."
        }
      },
      {
        file: "b-02", phase: null,
        room: { zh: "客厅", en: "The Living Room" },
        caption: {
          zh: "层高大方，光也大方。浅橡木地板一路铺到落地推拉门前，米色转角沙发软到陷进去就不想起来，门一推开就是满眼绿——周末瘫一整天的快乐，懂的都懂。",
          en: "Tall ceilings, and light to match. Pale oak floors run right up to the sliding glass doors, and the beige sectional is the sink-in kind you don't get up from. Slide the door open and it's all green out there. The joy of melting into the couch all weekend — you know the one."
        }
      },
      {
        file: "b-03", phase: null,
        room: { zh: "壁炉一隅", en: "By the Fireplace" },
        caption: {
          zh: "电壁炉嵌进白色矮柜，暖光一跳一跳，墙上随手挂着唱片和霓虹灯牌。橡木地板的纹理在自然光下越看越顺眼——这种角落，泡杯茶坐下，一下午就没了。",
          en: "An electric fireplace tucked into a low white console, its glow flickering beneath a wall of records and a casual neon sign. The oak grain only looks better in daylight. Sit down here with a cup of tea and there goes the whole afternoon."
        }
      },
      {
        file: "b-04", phase: null,
        room: { zh: "通往露台", en: "Toward the Deck" },
        caption: {
          zh: "格栅推拉门把外头的树影请进屋。窝在沙发里，目光越过软凳，正好落在那片刷红的木露台上——室内室外就隔一道干净门槛。养花、喝茶、发呆，随便挑。",
          en: "The gridded sliding doors usher the trees' shadows indoors. Curl up on the sofa, look past the ottoman, and your eye lands on the red-painted deck — inside and out, just one clean threshold apart. Tend the plants, sip your tea, or stare into space. Dealer's choice."
        }
      },
      {
        file: "b-05", phase: null,
        room: { zh: "楼梯与厨房", en: "Staircase & Kitchen" },
        caption: {
          zh: "橡木踏步配黑铁栏杆，一级一级稳稳往上。楼梯收口、扶手弧度，都是朱师傅亲手一点点磨的——上下楼这件小事，他都没让你将就。转个弯，就是那间暖色双色厨房。",
          en: "Oak treads and black iron balusters climb steadily, step by sure step. The finish on each tread, the curve of the handrail — Master Zhu sanded them by hand. He wasn't about to let you settle, even on something as humble as a staircase. Round the corner and the warm two-tone kitchen appears."
        }
      },
      {
        file: "b-06", phase: null,
        room: { zh: "餐厨空间", en: "Kitchen & Dining" },
        caption: {
          zh: "专业级六头燃气灶配大号不锈钢油烟机，这是给真·下厨之人备的，绝非摆设。原木下柜白色吊柜上下呼应，飘窗边那组金腿绒面椅一摆——烟火气里也透着一股低调的讲究。",
          en: "A pro-style six-burner gas range under a big stainless hood — for someone who actually cooks, not just for show. Wood base cabinets answer the white uppers above, and the gold-legged velvet chairs by the bay window lend all that honest cooking a note of understated class."
        }
      },
      {
        file: "b-07", phase: null,
        room: { zh: "双色厨房", en: "Two-Tone Kitchen" },
        caption: {
          zh: "白色吊柜配原木下柜，是这间厨房最耐看的搭法，怎么看都不腻。仿大理石台面和墙面一气呵成，窗外绿植探进来——这么个厨房，不会做饭的都想系上围裙试两手。",
          en: "White uppers over wood base cabinets — the combination that never tires the eye. Marble-look counters flow seamlessly into the backsplash, greenery peeking in at the window. A kitchen like this could tempt even a non-cook to tie on an apron and give it a go."
        }
      },
      {
        file: "b-08", phase: "detail",
        room: { zh: "厨房细节", en: "Kitchen Detail" },
        caption: {
          zh: "一只大号不锈钢围裙水槽配抽拉龙头，刷锅洗碗都痛快。台面墙面的拼缝、龙头底座的密封，朱师傅收得一丝不苟——好厨房的讲究全藏在这些没人会盯着看的地方。魔鬼，从来都在细节里。",
          en: "A big stainless apron-front sink with a pull-down faucet makes the scrubbing almost fun. The joint where counter meets wall, the seal around the faucet base — Master Zhu finished them meticulously. The real quality of a kitchen hides in the spots nobody bothers to look. The devil's always in the details."
        }
      },
      {
        file: "b-09", phase: null,
        room: { zh: "卧室", en: "Bedroom" },
        caption: {
          zh: "顶上的石膏线，是这栋老房子留下的体面，朱师傅没舍得抹掉。灰色软包床配橄榄绿床盖，阳光透过白格窗洒一地——老房子最难得的不是新，是把岁月擦亮了还透着那股从容。",
          en: "The crown molding overhead is a bit of this old house's dignity — Master Zhu couldn't bring himself to erase it. A grey upholstered bed, an olive coverlet, sunlight pooling on the floor through a white-grid window. The rarest thing in an old house isn't newness; it's age polished until it glows, still perfectly at ease."
        }
      },
      {
        file: "b-10", phase: null,
        room: { zh: "主卫", en: "Master Bath" },
        caption: {
          zh: "独立浴缸往窗边一摆，一整面木格栅墙，卫生间秒变私人小汤屋。白色双台盆、哑光黑龙头、椭圆镜，繁简拿捏得刚刚好——忙了一天回家泡个澡，颈椎腰椎都得谢谢你。",
          en: "Set a freestanding tub by the window, add a full wall of wood slats, and the bathroom turns into a private little hot-spring retreat. A white double vanity, matte-black fixtures, an oval mirror — the balance of plain and refined judged just right. Come home, run a bath, and your neck and back will thank you."
        }
      },
      {
        file: "b-11", phase: null,
        room: { zh: "客卫", en: "Guest Bath" },
        caption: {
          zh: "白色长条墙砖中间，嵌一道银灰玻璃马赛克腰线，低调里藏着小心机。哑光黑龙头撞上金纹石材台面，六角地砖细细密密铺开——一间客卫都这么用心，难怪说细节见格调。",
          en: "Between white plank-set tiles runs a single band of silver-grey glass mosaic — a discreet little flourish with intent. Matte-black fixtures play against a gold-veined stone vanity top, hexagon floor tile spread out fine and tight. When even the guest bath gets this much care, you understand why they say class lives in the details."
        }
      },
      {
        file: "b-12", phase: null,
        room: { zh: "淋浴间", en: "Shower Room" },
        caption: {
          zh: "亚麻肌理的墙砖温柔不反光，玻璃马赛克腰线横贯，鹅卵石地面踩上去像顺带做了个足底按摩。玻璃推门干净利落，干湿分得明明白白——朱师傅那句话怎么说的：防水做到位，住十年不返工。",
          en: "Linen-textured wall tile, soft and glare-free, a glass-mosaic band running across it, and a pebbled floor that throws in a little foot massage for free. The sliding glass door is crisp and clean, wet and dry kept firmly apart. As Master Zhu likes to say: get the waterproofing right and you won't touch it for ten years."
        }
      }
    ]
  }
];
