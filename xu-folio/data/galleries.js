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
    eyebrow: { zh: "作品二", en: "Project Two" },
    title: {
      zh: "明亮开阔的现代小宅",
      en: "A Bright, Open Modern Home"
    },
    intro: {
      zh: "推开门，是一整片连通的光。朱师傅把碍事的隔墙敲掉，厨房、餐厅、客厅在同一片日光里铺开，宽敞又通透。灰调橱柜配原木地板，低调又耐看。住客的原话是“不想走了”——这种开放式格局，搬回自己家也一样住得舒坦。",
      en: "Open the door and the whole place is one unbroken sweep of light. Master Zhu took out the walls that got in the way, so kitchen, dining and living now share the same daylight — open and airy. Grey cabinets, warm wood floors, understated and easy to live with. A guest put it best: 'I'm not leaving.' The same open layout feels just as good in a home of your own."
    },
    airbnb: "https://www.airbnb.com/rooms/1252606386506815453",
    reviews: [
      {
        kind: "client", stars: 5,
        name: "Michelle",
        meta: { zh: "本套作品业主 · 委托朱师傅翻新", en: "Owner of this project · hired Master Zhu for the remodel" },
        text: {
          zh: "原本房子面积比较小，但这次在朱师傅的改造下，空间利用率明显提升，整体看起来更开阔显大气，住起来也更实用。\n设计很有审美，做出来的效果非常适合做民宿，拍照很出片，整体质感比预期更好，对后期出租和吸引客户也很有帮助。非常感谢🙏\n施工过程沟通顺畅，完工后有小问题也都及时处理，这点在装修行业里很加分。\n整体来说，这种小户型如果想提升颜值和实用性，找对师傅真的很关键，我这次是找对人了。再次感激！",
          en: "The place started out fairly small, but after Master Zhu's remodel the use of space improved dramatically — it now looks far more open and impressive, and it's more practical to live in too.\nThe design has real taste. The result turned out beautifully suited to a vacation rental: wonderfully photogenic, with overall quality beyond what I'd expected — a real help for renting it out and drawing guests later on. Thank you so much 🙏\nCommunication during the build was smooth, and any small issues after completion were handled promptly — a real plus in this trade.\nAll in all, for a smaller home like this, if you want to lift both its looks and its usefulness, finding the right craftsman is everything — and this time I found the right person. Thanks again!"
        }
      },
      {
        name: "Vivian", stars: 5,
        meta: { zh: "美国纽约 · 2025年11月 · 结伴出游", en: "New York, NY · November 2025 · Group trip" },
        text: {
          zh: "厨房特别漂亮，房间非常干净，WiFi 给力，每个房间的空调都很棒；小区安静又友善，床偏硬（睡着踏实），沙发也很舒服。总体来说，是我住过最棒的 Airbnb 之一。",
          en: "Beautiful kitchen, very clean, good WiFi, amazing ACs in all the rooms, quiet and friendly neighborhood, very firm bed, comfortable couch. Overall one of the best Airbnbs I've stayed at."
        }
      },
      {
        name: "Ann Celeste", stars: 5,
        meta: { zh: "美国路易斯安那州霍马 · 2025年4月 · 入住数晚", en: "Houma, LA · April 2025 · Stayed a few nights" },
        text: {
          zh: "我们太喜欢这里了！空间一尘不染、漂亮极了。住得很舒服，去哪儿都方便！有问题联系房东，回复也很及时。谢谢这么棒的住处和热情款待——我们已经迫不及待想再来了！",
          en: "We loved staying in this location! The space is pristine and beautiful. We were comfortable and close to everything we needed to get to! Hosts were responsive when we reached out with questions. Thanks for a great place to stay and for hosting us! We can't wait to visit again!"
        }
      },
      {
        name: "Candice", stars: 5,
        meta: { zh: "美国德州贝敦 · 2025年8月 · 入住约一周", en: "Baytown, TX · August 2025 · Stayed about a week" },
        text: {
          zh: "这次入住太美好了！♥️",
          en: "We had such a beautiful stay! ♥️"
        }
      },
      {
        name: "Ignacio", stars: 5,
        meta: { zh: "2026年2月 · 带娃入住", en: "February 2026 · Stayed with kids" },
        text: {
          zh: "太喜欢这儿了，房子很漂亮，闻起来也清清爽爽，我一定会再来。",
          en: "I loved it here so much, it was beautiful, smelled good, and I would definitely return."
        }
      }
    ],
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
          zh: "L 形动线，是朱师傅站在灶台前来回比划磨出来的。电陶炉、抽拉龙头、嵌入式洗碗机一个不少；柜门每道缝都对得齐齐整整，抽屉一推一拉顺滑得很——四十年练出来的手感，再挑剔的人也挑不出毛病。",
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
    guestFavorite: { rating: "4.92" },
    eyebrow: { zh: "作品一", en: "Project One" },
    title: {
      zh: "暖意复式宅邸",
      en: "A Warm Two-Story Retreat"
    },
    intro: {
      zh: "两层的小洋楼，木色和白色搭在一起，从里暖到外。从黄昏亮灯的露台，到楼梯上一根根铁艺栏杆，朱师傅把“住得舒服”做进了每一个看得见和看不见的角落。这是出租房，住客给了 4.92 分；要是你自己的家，他只会更上心。",
      en: "A little two-story house where wood and white warm it through, inside and out. From the deck glowing at dusk to every iron baluster on the stairs, Master Zhu worked the feeling of home into every corner, seen and unseen. This one's a rental — guests rate it 4.92. He'd put even more care into a home you actually live in."
    },
    airbnb: "https://www.airbnb.com/rooms/1199645525624502163",
    reviews: [
      {
        kind: "client", stars: 5,
        name: "Alan",
        meta: { zh: "本套作品业主 · 委托朱师傅翻新", en: "Owner of this project · hired Master Zhu for the remodel" },
        text: {
          zh: "这次装修体验很好，必须给师傅一个五星好评！\n这套房子是按民宿标准来做的，对效果和细节要求比较高。师傅在前期沟通时就很专业，不仅能理解我们的需求，还会从实际使用和维护角度给出建议，帮我们优化方案同时控制预算。\n施工过程也很省心，沟通顺畅，现场也保持整洁，细节处理（比如收边、对缝）做得很到位，整体效果超出了预期。\n完工后有一些小问题，师傅也都及时过来处理，没有推诿👍\n整个过程中没有任何隐形加价，这点在装修行业真的很难得。整体性价比很高，如果有朋友要装修，尤其是做民宿或者对品质有要求的，我会愿意推荐朱师傅。",
          en: "A great renovation experience — Master Zhu has more than earned these five stars!\nWe had this place finished to vacation-rental standard, so we were demanding about both the result and the fine details. He was a professional from the very first conversations: he not only understood what we wanted, but advised us from the angle of real daily use and long-term upkeep, helping us refine the plan while keeping the budget under control.\nThe build itself was completely worry-free — communication was smooth, the site stayed tidy, and the detail work (edge trims, seam alignment) was spot on. The overall result went beyond what we'd expected.\nA few small issues came up after completion, and he came over to take care of every one of them promptly, no excuses. 👍\nAcross the whole project there were zero hidden add-on charges — genuinely rare in this trade. Outstanding value for money. If a friend were renovating — especially for a rental, or anyone who cares about quality — I'd gladly recommend Master Zhu."
        }
      },
      {
        name: "Ashley", stars: 5,
        meta: { zh: "美国华盛顿州奥林匹亚 · 1周前 · 结伴出游", en: "Olympia, WA · 1 week ago · Group trip" },
        text: {
          zh: "和家人一起入住，住得非常舒服。空间很干净，房间也特别宽敞，我们都很喜欢。很推荐多人出行的大家庭。",
          en: "Stayed with my family here and we felt very comfortable. The space was very clean and we loved how spacious the rooms were. Would recommend for a large group."
        }
      },
      {
        name: "Sofia", stars: 5,
        meta: { zh: "美国华盛顿州肯纳威克 · 2026年4月 · 带娃入住", en: "Kennewick, WA · April 2026 · Stayed with kids" },
        text: {
          zh: "特别安静，又干净。很喜欢那一处道奇队主题的设计小心思。离商店也够近。一定会推荐给别人，也会再来。",
          en: "Loved how quiet it was and clean. Loved the Dodgers touch of design. It was close enough to the stores. I would definitely recommend to others and stay again."
        }
      },
      {
        name: "嘉文", stars: 5,
        meta: { zh: "Airbnb 六年老用户 · 2026年3月 · 入住约一周", en: "6 years on Airbnb · March 2026 · Stayed about a week" },
        text: {
          zh: "体验很棒。我们四个人入住，每人都有自己的房间。后院特别大，隔壁就是公园，邻居们也都很友好。",
          en: "Great experience. There were four of us staying, and everyone had their own room. The backyard is huge, and there's a park next door. The neighbors are all very nice."
        }
      },
      {
        name: "Richa", stars: 5,
        meta: { zh: "Airbnb 七年老用户 · 2026年3月", en: "7 years on Airbnb · March 2026" },
        text: {
          zh: "这地方真漂亮，作为民宿住着特别舒服。露台很棒，是聚会的好地方。",
          en: "You have a beautiful place out there, super comfortable for a bnb. The patio is cool and a great party place."
        }
      },
      {
        name: "Jiasheng", stars: 5,
        meta: { zh: "美国加州桑尼维尔 · 2025年12月 · 携宠入住", en: "Sunnyvale, CA · December 2025 · Stayed with a pet" },
        text: {
          zh: "位置很好，空间非常宽敞，房东也很友善！",
          en: "Great location, very spacious and nice hosts!"
        }
      },
      {
        name: "Miguel", stars: 5,
        meta: { zh: "墨西哥墨西哥城 · 2026年4月 · 带娃入住", en: "Mexico City, Mexico · April 2026 · Stayed with kids" },
        text: {
          zh: "住得非常满意。房子非常干净、非常温馨。好极了。",
          en: "Excellent stay. Very clean and very cozy place. Excellent."
        }
      },
      {
        name: "Gadiel", stars: 5,
        meta: { zh: "Airbnb 两年用户 · 2026年4月 · 结伴出游", en: "2 years on Airbnb · April 2026 · Group trip" },
        text: {
          zh: "房东非常友好。房子很干净，入住指引也很清楚。非常适合我们一家，住下来一点问题都没有。",
          en: "Very friendly host. The house was clean and the instructions were very clear. It was a perfect fit for my family and I had no issues staying at this house."
        }
      },
      {
        name: "Itzel", stars: 5,
        meta: { zh: "美国亚利桑那州凤凰城 · 2周前 · 带娃入住", en: "Phoenix, AZ · 2 weeks ago · Stayed with kids" },
        text: {
          zh: "漂亮的房子，社区也很好。",
          en: "Beautiful home in a great neighborhood."
        }
      }
    ],
    images: [
      {
        file: "b-02", phase: null,
        room: { zh: "客厅", en: "The Living Room" },
        caption: {
          zh: "层高大方，光也大方。浅橡木地板一路铺到落地推拉门前，米色转角沙发软到陷进去就不想起来，门一推开就是满眼绿——周末窝在这儿瘫上一整天，神仙日子。",
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
          zh: "六头燃气灶配大号不锈钢油烟机，专为中餐爆炒准备——大火快炒，油烟一吸而尽，墙面不挂油、屋里不留味。这才是给天天开火的人备的厨房，不是样子货。原木下柜配白色吊柜，烟火气里也透着讲究。",
          en: "A six-burner gas range under a big stainless hood — made for real Chinese cooking. Crank the heat for a proper stir-fry and the smoke's pulled away before it can cling to the walls: no greasy film, no lingering smell. A kitchen for someone who fires up the wok every day, not a showpiece. Wood base cabinets, white uppers — honest cooking with a sense of style."
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
      },
      {
        file: "b-01", phase: null,
        room: { zh: "暮色中的小院", en: "The House at Dusk" },
        caption: {
          zh: "天一擦黑，露台的灯一盏盏亮起来。木栏杆顺着房子的轮廓铺开，廊下暖光漫到草坪上——这画面往朋友圈一发，点赞收到手软。岁月静好，大概就是这个样子。",
          en: "As dusk settles, the deck lights blink on one by one. The timber railing traces the line of the house, warm light spilling onto the lawn. Post this picture and watch the likes roll in. So this is the quiet good life everyone keeps going on about."
        }
      }
    ]
  }
];
