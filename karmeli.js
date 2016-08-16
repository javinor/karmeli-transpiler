$('#keyboard').keyboard({
  language: null,  // string or array
  rtl: false, // language direction right-to-left

  layout: 'custom',
  customLayout : {
    'normal': [
      '\u{00C3} \u{00C6} \u{00DE} \u{00D5} \u{0160} \u{00C1} \u{00C9} \u{00D3}',
      '\u{00E3} \u{00E6} \u{00FE} \u{00F5} \u{0161} \u{00E1} \u{00E9} \u{00F3}'    
    ]
  },

  position : {
    of : null,
    my : 'left top',
    at : 'left top',
    at2: 'left bottom'
  },

  reposition : true,
  usePreview : false,
  alwaysOpen : false,
  initialFocus : true,
  noFocus : false,
  stayOpen : false,
  userClosed : false,
  ignoreEsc : false,
  closeByClickEvent : false,

  // *** change keyboard language & look ***
  display : {
    // \u2714 = check mark - same action as accept
    'a'      : '\u2714:Accept (Shift-Enter)',
    'accept' : 'Accept:Accept (Shift-Enter)',
    'alt'    : 'AltGr:Alternate Graphemes',
    // \u232b = outlined left arrow with x inside
    'b'      : '\u232b:Backspace',
    'bksp'   : 'Bksp:Backspace',
    // \u2716 = big X, close - same action as cancel
    'c'      : '\u2716:Cancel (Esc)',
    'cancel' : 'Cancel:Cancel (Esc)',
    // clear num pad
    'clear'  : 'C:Clear',
    'combo'  : '\u00f6:Toggle Combo Keys',
    // decimal point for num pad (optional);
    // change '.' to ',' for European format
    'dec'    : '.:Decimal',
    // down, then left arrow - enter symbol
    'e'      : '\u21b5:Enter',
    'empty'  : '\u00a0', // &nbsp;
    'enter'  : 'Enter:Enter',
    // \u2190 = left arrow (move caret)
    'left'   : '\u2190',
    // caps lock
    'lock'   : '\u21ea Lock:Caps Lock',
    'next'   : 'Next',
    'prev'   : 'Prev',
    // \u2192 = right arrow (move caret)
    'right'  : '\u2192',
    // \u21e7 = thick hollow up arrow
    's'      : '\u21e7:Shift',
    'shift'  : 'Shift:Shift',
    // \u00b1 = +/- sign for num pad
    'sign'   : '\u00b1:Change Sign',
    'space'  : '&nbsp;:Space',

    // \u21e5 = right arrow to bar; used since this virtual
    // keyboard works with one directional tabs
    't'      : '\u21e5:Tab',
    // \u21b9 is the true tab symbol (left & right arrows)
    'tab'    : '\u21e5 Tab:Tab',
    // replaced by an image
    'toggle' : ' ',

    // added to titles of keys
    // accept key status when acceptValid:true
    'valid': 'valid',
    'invalid': 'invalid',
    // combo key states
    'active': 'active',
    'disabled': 'disabled'
  },

  wheelMessage : 'Use mousewheel to see other keys',

  css : {
    input: 'ui-widget-content ui-corner-all',
    container: 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',
    popup: '',
    buttonDefault  : 'ui-state-default ui-corner-all',
    buttonHover    : 'ui-state-hover',
    buttonAction   : 'ui-state-active',
    buttonDisabled : 'ui-state-disabled',
    buttonEmpty    : 'ui-keyboard-empty'
  },

  // *** Useability ***
  autoAccept : true,
  autoAcceptOnEsc : false,
  lockInput : false,
  restrictInput : false,
  restrictInclude : '', // e.g. 'a b foo \ud83d\ude38'
  acceptValid : true,
  autoAcceptOnValid : false,
  cancelClose : true,
  tabNavigation : false,
  enterNavigation : true,
  enterMod : 'altKey',
  stopAtEnd : true,
  appendLocally : false,
  appendTo : '#keyboard-anchor',
  stickyShift : true,
  caretToEnd : false,
  preventPaste : false,
  scrollAdjustment : 10,
  maxLength : false,
  maxInsert : true,
  repeatDelay : 500,
  repeatRate : 20,
  resetDefault : false,
  openOn : 'focus',
  keyBinding : 'mousedown',
  useWheel : true,
  useCombos : true,

  // *** Methods ***
  // Callbacks - add code inside any of these callback functions as desired
  initialized   : function(e, keyboard, el) {},
  beforeVisible : function(e, keyboard, el) {},
  visible       : function(e, keyboard, el) {},
  beforeInsert  : function(e, keyboard, el, textToAdd) { return textToAdd; },
  change        : function(e, keyboard, el) {},
  beforeClose   : function(e, keyboard, el, accepted) {},
  accepted      : function(e, keyboard, el) {},
  canceled      : function(e, keyboard, el) {},
  restricted    : function(e, keyboard, el) {},
  hidden        : function(e, keyboard, el) {},

  // called instead of base.switchInput
  switchInput : function(keyboard, goToNext, isAccepted) {},

  // used if you want to create a custom layout or modify the built-in keyboard
  create : function(keyboard) { return keyboard.buildKeyboard(); },



  // build key callback (individual keys)
  buildKey : function( keyboard, data ) {
    /*
    data = {
      // READ ONLY
      // true if key is an action key
      isAction : [boolean],
      // key class name suffix ( prefix = 'ui-keyboard-' ); may include
      // decimal ascii value of character
      name     : [string],
      // text inserted (non-action keys)
      value    : [string],
      // title attribute of key
      title    : [string],
      // keyaction name
      action   : [string],
      // HTML of the key; it includes a <span> wrapping the text
      html     : [string],
      // jQuery selector of key which is already appended to keyboard
      // use to modify key HTML
      $key     : [object]
    }
    */
    return data;
  },

  validate : function(keyboard, value, isClosing) {
    return true;
  }

});




const l1 = 'Mixa,'
const l2 = 'Maskil, na'+'\u{00F5}'+'im w '+'\u{00E6}'+'ayxan,'
const l3 = '\u{00C3}'+'ohev safa, madda'+'\u{00F5}'+' wa '+'\u{00FE}'+'evva'+'\u{00F5}'+','
const l4 = 'Mamci'+'\u{00E3}'+' ha ktav ha karmeli'



const upper = {
    '\u{05D0}': '\u{00C3}', // א
    '\u{05B8}': 'A',        // קמץ
    '\u{05B7}': 'A',        // פתח
    '\u{05D1}': 'V',        // ב
    '\u{05D2}': 'G',        // ג
    '\u{05D3}': 'D',        // ד
    '\u{05D4}': 'H',        // ה
    '\u{05B6}': 'E',        // סגול
    '\u{05B5}': 'E',        // צירי
    '\u{05D5}': 'W',        // ו
    '\u{05BB}': 'U',        // קובוץ
    '\u{05D6}': 'Z',        // ז
    '\u{05D7}': '\u{00C6}', // ח
    '\u{05D8}': '\u{00DE}', // ט
    '\u{05D9}': 'Y',        // י
    '\u{05B4}': 'I',        // חיריק
    '\u{05DA}': 'X',        // ך
    '\u{05DB}': 'X',        // כ
    '\u{05DC}': 'L',        // ל
    '\u{05DD}': 'M',        // ם
    '\u{05DE}': 'M',        // מ
    '\u{05DF}': 'N',        // ן
    '\u{05E0}': 'N',        // נ
    '\u{05E1}': 'S',        // ס
    '\u{05E2}': '\u{00D5}', // ע
    '\u{05BA}': 'O',        // חולם חסר
    '\u{05E3}': 'F',        // ף
    '\u{05E4}': 'F',        // פ
    '\u{05E5}': 'C',        // ץ
    '\u{05E6}': 'C',        // צ
    '\u{05E7}': 'Q',        // ק
    '\u{05E8}': 'R',        // ר
    '\u{05E9}': '\u{0160}', // ש
    '\u{05EA}': 'T',        // ת
    '\u{05B2}': '\u{00C1}', // חטף פתח
    '\u{05B1}': '\u{00C9}', // חטף סגול
    '\u{05B3}': '\u{00D3}'  // חטף קמץ
  }

  const lower = {
    '\u{05D0}': '\u{00E3}', // א
    '\u{05B8}': 'a',        // קמץ
    '\u{05B7}': 'a',        // פתח
    '\u{05D1}': 'v',        // ב
    '\u{05D2}': 'g',        // ג
    '\u{05D3}': 'd',        // ד
    '\u{05D4}': 'h',        // ה
    '\u{05B6}': 'e',        // סגול
    '\u{05B5}': 'e',        // צירי
    '\u{05D5}': 'w',        // ו
    '\u{05BB}': 'u',        // קובוץ
    '\u{05D6}': 'z',        // ז
    '\u{05D7}': '\u{00E6}', // ח
    '\u{05D8}': '\u{00FE}', // ט
    '\u{05D9}': 'y',        // י
    '\u{05B4}': 'i',        // חיריק
    '\u{05DA}': 'x',        // ך
    '\u{05DB}': 'x',        // כ
    '\u{05DC}': 'l',        // ל
    '\u{05DD}': 'm',        // ם
    '\u{05DE}': 'm',        // מ
    '\u{05DF}': 'n',        // ן
    '\u{05E0}': 'n',        // נ
    '\u{05E1}': 's',        // ס
    '\u{05E2}': '\u{00F5}', // ע
    '\u{05BA}': 'o',        // חולם חסר
    '\u{05E3}': 'f',        // ף
    '\u{05E4}': 'f',        // פ
    '\u{05E5}': 'c',        // ץ
    '\u{05E6}': 'c',        // צ
    '\u{05E7}': 'q',        // ק
    '\u{05E8}': 'r',        // ר
    '\u{05E9}': '\u{0161}', // ש
    '\u{05EA}': 't',        // ת
    '\u{05B2}': '\u{00E1}', // חטף פתח
    '\u{05B1}': '\u{00E9}', // חטף סגול
    '\u{05B3}': '\u{00F3}'  // חטף קמץ
  }

  var tab= '    '
  document.getElementById('line5').innerHTML = l1
  document.getElementById('line6').innerHTML = tab+l2
  document.getElementById('line7').innerHTML = tab+tab+l3
  document.getElementById('line8').innerHTML = tab+tab+tab+l4