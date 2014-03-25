/** @constructor */
ScalaJS.c.scala_xml_dtd_Tokens = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TOKEN$undPCDATA$1 = 0;
  this.NAME$1 = 0;
  this.LPAREN$1 = 0;
  this.RPAREN$1 = 0;
  this.COMMA$1 = 0;
  this.STAR$1 = 0;
  this.PLUS$1 = 0;
  this.OPT$1 = 0;
  this.CHOICE$1 = 0;
  this.END$1 = 0;
  this.S$1 = 0
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_dtd_Tokens.prototype.constructor = ScalaJS.c.scala_xml_dtd_Tokens;
ScalaJS.c.scala_xml_dtd_Tokens.prototype.TOKEN$undPCDATA__I = (function() {
  return 0
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.NAME__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.LPAREN__I = (function() {
  return 3
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.RPAREN__I = (function() {
  return 4
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.COMMA__I = (function() {
  return 5
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.STAR__I = (function() {
  return 6
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.PLUS__I = (function() {
  return 7
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.OPT__I = (function() {
  return 8
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.CHOICE__I = (function() {
  return 9
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.END__I = (function() {
  return 10
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.S__I = (function() {
  return 13
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.token2string__I__T = (function(i) {
  var x1 = i;
  switch (x1) {
    case 0:
      {
        return "#PCDATA";
        break
      };
    case 1:
      {
        return "NAME";
        break
      };
    case 3:
      {
        return "(";
        break
      };
    case 4:
      {
        return ")";
        break
      };
    case 5:
      {
        return ",";
        break
      };
    case 6:
      {
        return "*";
        break
      };
    case 7:
      {
        return "+";
        break
      };
    case 8:
      {
        return "?";
        break
      };
    case 9:
      {
        return "|";
        break
      };
    case 10:
      {
        return "END";
        break
      };
    case 13:
      {
        return " ";
        break
      };
    default:
      throw new ScalaJS.c.scala_MatchError().init___O(ScalaJS.bI(x1));
  }
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.token2string__I__ = (function(i) {
  return this.token2string__I__T(i)
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.S__ = (function() {
  return ScalaJS.bI(this.S__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.END__ = (function() {
  return ScalaJS.bI(this.END__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.CHOICE__ = (function() {
  return ScalaJS.bI(this.CHOICE__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.OPT__ = (function() {
  return ScalaJS.bI(this.OPT__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.PLUS__ = (function() {
  return ScalaJS.bI(this.PLUS__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.STAR__ = (function() {
  return ScalaJS.bI(this.STAR__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.COMMA__ = (function() {
  return ScalaJS.bI(this.COMMA__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.RPAREN__ = (function() {
  return ScalaJS.bI(this.RPAREN__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.LPAREN__ = (function() {
  return ScalaJS.bI(this.LPAREN__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.NAME__ = (function() {
  return ScalaJS.bI(this.NAME__I())
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.TOKEN$undPCDATA__ = (function() {
  return ScalaJS.bI(this.TOKEN$undPCDATA__I())
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_Tokens = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_Tokens.prototype = ScalaJS.c.scala_xml_dtd_Tokens.prototype;
ScalaJS.is.scala_xml_dtd_Tokens = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_Tokens)))
});
ScalaJS.as.scala_xml_dtd_Tokens = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_Tokens(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.Tokens")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_Tokens = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_Tokens)))
});
ScalaJS.asArrayOf.scala_xml_dtd_Tokens = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_Tokens(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.Tokens;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_Tokens = new ScalaJS.ClassTypeData({
  scala_xml_dtd_Tokens: 0
}, false, "scala.xml.dtd.Tokens", ScalaJS.data.java_lang_Object, {
  scala_xml_dtd_Tokens: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_Tokens.prototype.$classData = ScalaJS.data.scala_xml_dtd_Tokens;
//@ sourceMappingURL=Tokens.js.map
