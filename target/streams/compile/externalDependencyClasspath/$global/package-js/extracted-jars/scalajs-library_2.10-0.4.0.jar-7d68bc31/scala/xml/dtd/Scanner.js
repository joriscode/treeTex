/** @constructor */
ScalaJS.c.scala_xml_dtd_Scanner = (function() {
  ScalaJS.c.scala_xml_dtd_Tokens.call(this);
  this.ENDCH$2 = 0;
  this.token$2 = 0;
  this.value$2 = null;
  this.it$2 = null;
  this.c$2 = 0
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype = new ScalaJS.inheritable.scala_xml_dtd_Tokens();
ScalaJS.c.scala_xml_dtd_Scanner.prototype.constructor = ScalaJS.c.scala_xml_dtd_Scanner;
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isSpace__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isSpace__Lscala_collection_Seq__Z = (function(cs) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z(this, cs)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isAlpha__C__Z = (function(c) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlpha__Lscala_xml_parsing_TokenTests__C__Z(this, c)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isAlphaDigit__C__Z = (function(c) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlphaDigit__Lscala_xml_parsing_TokenTests__C__Z(this, c)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isNameChar__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameChar__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isNameStart__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameStart__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isName__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isName__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isPubIDChar__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isPubIDChar__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isValidIANAEncoding__Lscala_collection_Seq__Z = (function(ianaEncoding) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isValidIANAEncoding__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z(this, ianaEncoding)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.checkSysID__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkSysID__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.checkPubID__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkPubID__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.ENDCH__C = (function() {
  return 0
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.token__I = (function() {
  return this.token$2
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.token$und$eq__I__V = (function(x$1) {
  this.token$2 = x$1
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.value__T = (function() {
  return this.value$2
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.value$und$eq__T__V = (function(x$1) {
  this.value$2 = x$1
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.it__p2__Lscala_collection_Iterator = (function() {
  return this.it$2
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.it$und$eq__p2__Lscala_collection_Iterator__V = (function(x$1) {
  this.it$2 = x$1
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.c__p2__C = (function() {
  return this.c$2
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.c$und$eq__p2__C__V = (function(x$1) {
  this.c$2 = x$1
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.initScanner__T__V = (function(s) {
  this.value$und$eq__T__V("");
  this.it$und$eq__p2__Lscala_collection_Iterator__V(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).iterator__Lscala_collection_Iterator());
  this.token$und$eq__I__V(11);
  this.next__V();
  this.nextToken__V()
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.nextToken__V = (function() {
  if ((this.token__I() !== 10)) {
    this.token$und$eq__I__V(this.readToken__I())
  }
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isIdentChar__Z = (function() {
  return (((97 <= this.c__p2__C()) && (this.c__p2__C() <= 122)) || ((65 <= this.c__p2__C()) && (this.c__p2__C() <= 90)))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.next__V = (function() {
  if (this.it__p2__Lscala_collection_Iterator().hasNext__Z()) {
    this.c$und$eq__p2__C__V(ScalaJS.uC(this.it__p2__Lscala_collection_Iterator().next__O()))
  } else {
    this.c$und$eq__p2__C__V(0)
  }
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.acc__C__V = (function(d) {
  if ((this.c__p2__C() === d)) {
    this.next__V()
  } else {
    ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing((((("expected '" + ScalaJS.bC(d)) + "' found '") + ScalaJS.bC(this.c__p2__C())) + "' !"))
  }
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.accS__Lscala_collection_Seq__V = (function(ds) {
  ds.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(d) {
      d = ScalaJS.uC(d);
      arg$outer.acc__C__V(d);
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.readToken__I = (function() {
  if (this.isSpace__C__Z(this.c__p2__C())) {
    while (this.isSpace__C__Z(this.c__p2__C())) {
      this.c$und$eq__p2__C__V(ScalaJS.uC(this.it__p2__Lscala_collection_Iterator().next__O()))
    };
    return 13
  } else {
    var x1 = this.c__p2__C();
    switch (x1) {
      case 40:
        {
          this.next__V();
          return 3;
          break
        };
      case 41:
        {
          this.next__V();
          return 4;
          break
        };
      case 44:
        {
          this.next__V();
          return 5;
          break
        };
      case 42:
        {
          this.next__V();
          return 6;
          break
        };
      case 43:
        {
          this.next__V();
          return 7;
          break
        };
      case 63:
        {
          this.next__V();
          return 8;
          break
        };
      case 124:
        {
          this.next__V();
          return 9;
          break
        };
      case 35:
        {
          this.next__V();
          this.accS__Lscala_collection_Seq__V(ScalaJS.modules.scala_Predef().wrapString__T__Lscala_collection_immutable_WrappedString("PCDATA"));
          return 0;
          break
        };
      case 0:
        {
          return 10;
          break
        };
      default:
        if (this.isNameStart__C__Z(this.c__p2__C())) {
          return this.name__I()
        } else {
          return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("unexpected character:" + ScalaJS.bC(this.c__p2__C())))
        };
    }
  }
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.name__I = (function() {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  do {
    sb.append__C__Lscala_collection_mutable_StringBuilder(this.c__p2__C());
    this.next__V()
  } while (this.isNameChar__C__Z(this.c__p2__C()));
  this.value$und$eq__T__V(sb.toString__T());
  return 1
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_dtd_Tokens.prototype.init___.call(this);
  ScalaJS.impls.scala_xml_parsing_TokenTests$class__$init$__Lscala_xml_parsing_TokenTests__V(this);
  this.token$2 = 10;
  this.it$2 = null;
  this.c$2 = 122;
  return this
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.checkPubID__T__ = (function(s) {
  return ScalaJS.bZ(this.checkPubID__T__Z(s))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.checkSysID__T__ = (function(s$2) {
  return ScalaJS.bZ(this.checkSysID__T__Z(s$2))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isValidIANAEncoding__Lscala_collection_Seq__ = (function(ianaEncoding) {
  return ScalaJS.bZ(this.isValidIANAEncoding__Lscala_collection_Seq__Z(ianaEncoding))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isPubIDChar__C__ = (function(ch) {
  return ScalaJS.bZ(this.isPubIDChar__C__Z(ch))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isName__T__ = (function(s$3) {
  return ScalaJS.bZ(this.isName__T__Z(s$3))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isNameStart__C__ = (function(ch$2) {
  return ScalaJS.bZ(this.isNameStart__C__Z(ch$2))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isNameChar__C__ = (function(ch$3) {
  return ScalaJS.bZ(this.isNameChar__C__Z(ch$3))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isAlphaDigit__C__ = (function(c) {
  return ScalaJS.bZ(this.isAlphaDigit__C__Z(c))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isAlpha__C__ = (function(c$2) {
  return ScalaJS.bZ(this.isAlpha__C__Z(c$2))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isSpace__Lscala_collection_Seq__ = (function(cs) {
  return ScalaJS.bZ(this.isSpace__Lscala_collection_Seq__Z(cs))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isSpace__C__ = (function(ch$4) {
  return ScalaJS.bZ(this.isSpace__C__Z(ch$4))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.name__ = (function() {
  return ScalaJS.bI(this.name__I())
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.readToken__ = (function() {
  return ScalaJS.bI(this.readToken__I())
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.accS__Lscala_collection_Seq__ = (function(ds) {
  return ScalaJS.bV(this.accS__Lscala_collection_Seq__V(ds))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.acc__C__ = (function(d) {
  return ScalaJS.bV(this.acc__C__V(d))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.next__ = (function() {
  return ScalaJS.bV(this.next__V())
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.isIdentChar__ = (function() {
  return ScalaJS.bZ(this.isIdentChar__Z())
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.nextToken__ = (function() {
  return ScalaJS.bV(this.nextToken__V())
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.initScanner__T__ = (function(s$4) {
  return ScalaJS.bV(this.initScanner__T__V(s$4))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.value$und$eq__T__ = (function(x$1) {
  return ScalaJS.bV(this.value$und$eq__T__V(x$1))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.value__ = (function() {
  return this.value__T()
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.token$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.token$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.token__ = (function() {
  return ScalaJS.bI(this.token__I())
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.ENDCH__ = (function() {
  return ScalaJS.bC(this.ENDCH__C())
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_Scanner = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_Scanner.prototype = ScalaJS.c.scala_xml_dtd_Scanner.prototype;
ScalaJS.is.scala_xml_dtd_Scanner = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_Scanner)))
});
ScalaJS.as.scala_xml_dtd_Scanner = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_Scanner(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.Scanner")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_Scanner = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_Scanner)))
});
ScalaJS.asArrayOf.scala_xml_dtd_Scanner = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_Scanner(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.Scanner;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_Scanner = new ScalaJS.ClassTypeData({
  scala_xml_dtd_Scanner: 0
}, false, "scala.xml.dtd.Scanner", ScalaJS.data.scala_xml_dtd_Tokens, {
  scala_xml_dtd_Scanner: 1,
  scala_xml_parsing_TokenTests: 1,
  scala_xml_dtd_Tokens: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_Scanner.prototype.$classData = ScalaJS.data.scala_xml_dtd_Scanner;
//@ sourceMappingURL=Scanner.js.map
