/** @constructor */
ScalaJS.c.java_lang_Character$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TYPE$1 = null;
  this.MIN$undVALUE$1 = 0;
  this.MAX$undVALUE$1 = 0;
  this.LOWERCASE$undLETTER$1 = 0;
  this.UPPERCASE$undLETTER$1 = 0;
  this.OTHER$undLETTER$1 = 0;
  this.TITLECASE$undLETTER$1 = 0;
  this.LETTER$undNUMBER$1 = 0;
  this.COMBINING$undSPACING$undMARK$1 = 0;
  this.ENCLOSING$undMARK$1 = 0;
  this.NON$undSPACING$undMARK$1 = 0;
  this.MODIFIER$undLETTER$1 = 0;
  this.DECIMAL$undDIGIT$undNUMBER$1 = 0;
  this.SURROGATE$1 = 0;
  this.MIN$undRADIX$1 = 0;
  this.MAX$undRADIX$1 = 0;
  this.MIN$undHIGH$undSURROGATE$1 = 0;
  this.MAX$undHIGH$undSURROGATE$1 = 0;
  this.MIN$undLOW$undSURROGATE$1 = 0;
  this.MAX$undLOW$undSURROGATE$1 = 0;
  this.MIN$undSURROGATE$1 = 0;
  this.MAX$undSURROGATE$1 = 0
});
ScalaJS.c.java_lang_Character$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Character$.prototype.constructor = ScalaJS.c.java_lang_Character$;
ScalaJS.c.java_lang_Character$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undVALUE__C = (function() {
  return this.MIN$undVALUE$1
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undVALUE__C = (function() {
  return this.MAX$undVALUE$1
});
ScalaJS.c.java_lang_Character$.prototype.valueOf__C__Ljava_lang_Character = (function(charValue) {
  return new ScalaJS.c.java_lang_Character().init___C(charValue)
});
ScalaJS.c.java_lang_Character$.prototype.LOWERCASE$undLETTER__B = (function() {
  return this.LOWERCASE$undLETTER$1
});
ScalaJS.c.java_lang_Character$.prototype.UPPERCASE$undLETTER__B = (function() {
  return this.UPPERCASE$undLETTER$1
});
ScalaJS.c.java_lang_Character$.prototype.OTHER$undLETTER__B = (function() {
  return this.OTHER$undLETTER$1
});
ScalaJS.c.java_lang_Character$.prototype.TITLECASE$undLETTER__B = (function() {
  return this.TITLECASE$undLETTER$1
});
ScalaJS.c.java_lang_Character$.prototype.LETTER$undNUMBER__B = (function() {
  return this.LETTER$undNUMBER$1
});
ScalaJS.c.java_lang_Character$.prototype.COMBINING$undSPACING$undMARK__B = (function() {
  return this.COMBINING$undSPACING$undMARK$1
});
ScalaJS.c.java_lang_Character$.prototype.ENCLOSING$undMARK__B = (function() {
  return this.ENCLOSING$undMARK$1
});
ScalaJS.c.java_lang_Character$.prototype.NON$undSPACING$undMARK__B = (function() {
  return this.NON$undSPACING$undMARK$1
});
ScalaJS.c.java_lang_Character$.prototype.MODIFIER$undLETTER__B = (function() {
  return this.MODIFIER$undLETTER$1
});
ScalaJS.c.java_lang_Character$.prototype.DECIMAL$undDIGIT$undNUMBER__B = (function() {
  return this.DECIMAL$undDIGIT$undNUMBER$1
});
ScalaJS.c.java_lang_Character$.prototype.SURROGATE__B = (function() {
  return this.SURROGATE$1
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undRADIX__I = (function() {
  return this.MIN$undRADIX$1
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undRADIX__I = (function() {
  return this.MAX$undRADIX$1
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undHIGH$undSURROGATE__C = (function() {
  return this.MIN$undHIGH$undSURROGATE$1
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undHIGH$undSURROGATE__C = (function() {
  return this.MAX$undHIGH$undSURROGATE$1
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undLOW$undSURROGATE__C = (function() {
  return this.MIN$undLOW$undSURROGATE$1
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undLOW$undSURROGATE__C = (function() {
  return this.MAX$undLOW$undSURROGATE$1
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undSURROGATE__C = (function() {
  return this.MIN$undSURROGATE$1
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undSURROGATE__C = (function() {
  return this.MAX$undSURROGATE$1
});
ScalaJS.c.java_lang_Character$.prototype.getType__C__I = (function(ch) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.getType__I__I = (function(codePoint) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.digit__C__I__I = (function(c, radix) {
  if (((radix > this.MAX$undRADIX__I()) || (radix < this.MIN$undRADIX__I()))) {
    return -1
  } else {
    if ((((c >= 48) && (c <= 57)) && ((c - 48) < radix))) {
      return (c - 48)
    } else {
      if ((((c >= 65) && (c <= 90)) && ((c - 65) < (radix - 10)))) {
        return ((c - 65) + 10)
      } else {
        if ((((c >= 97) && (c <= 122)) && ((c - 97) < (radix - 10)))) {
          return ((c - 97) + 10)
        } else {
          if ((((c >= 65313) && (c <= 65338)) && ((c - 65313) < (radix - 10)))) {
            return ((c - 65313) + 10)
          } else {
            if ((((c >= 65345) && (c <= 65370)) && ((c - 65345) < (radix - 10)))) {
              return ((c - 65313) + 10)
            } else {
              return -1
            }
          }
        }
      }
    }
  }
});
ScalaJS.c.java_lang_Character$.prototype.isISOControl__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isDigit__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isLetter__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isLetterOrDigit__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isWhitespace__C__Z = (function(c) {
  return ScalaJS.protect(ScalaJS.g["RegExp"])("^\\s$")["test"](ScalaJS.objectToString(ScalaJS.bC(c)))
});
ScalaJS.c.java_lang_Character$.prototype.isSpaceChar__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isHighSurrogate__C__Z = (function(c) {
  return ((c >= this.MIN$undHIGH$undSURROGATE__C()) && (c <= this.MAX$undHIGH$undSURROGATE__C()))
});
ScalaJS.c.java_lang_Character$.prototype.isLowSurrogate__C__Z = (function(c) {
  return ((c >= this.MIN$undLOW$undSURROGATE__C()) && (c <= this.MAX$undLOW$undSURROGATE__C()))
});
ScalaJS.c.java_lang_Character$.prototype.isSurrogatePair__C__C__Z = (function(high, low) {
  return (this.isHighSurrogate__C__Z(high) && this.isLowSurrogate__C__Z(low))
});
ScalaJS.c.java_lang_Character$.prototype.isUnicodeIdentifierStart__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isUnicodeIdentifierPart__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isIdentifierIgnorable__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isMirrored__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isLowerCase__C__Z = (function(c) {
  return (this.toLowerCase__C__C(c) === c)
});
ScalaJS.c.java_lang_Character$.prototype.isUpperCase__C__Z = (function(c) {
  return (this.toUpperCase__C__C(c) === c)
});
ScalaJS.c.java_lang_Character$.prototype.isTitleCase__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.isJavaIdentifierPart__C__Z = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.getDirectionality__C__B = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.toUpperCase__C__C = (function(c) {
  return ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toUpperCase__Lscala_scalajs_runtime_RuntimeString__T(ScalaJS.objectToString(ScalaJS.bC(c)))), 0)
});
ScalaJS.c.java_lang_Character$.prototype.toLowerCase__C__C = (function(c) {
  return ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toLowerCase__Lscala_scalajs_runtime_RuntimeString__T(ScalaJS.objectToString(ScalaJS.bC(c)))), 0)
});
ScalaJS.c.java_lang_Character$.prototype.toTitleCase__C__C = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.getNumericValue__C__I = (function(c) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.reverseBytes__C__C = (function(ch) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Character$.prototype.toString__C__T = (function(c) {
  return this.valueOf__C__Ljava_lang_Character(c).toString__T()
});
ScalaJS.c.java_lang_Character$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Character = this;
  this.TYPE$1 = ScalaJS.data.scala_Char.getClassOf();
  this.MIN$undVALUE$1 = 0;
  this.MAX$undVALUE$1 = 255;
  this.LOWERCASE$undLETTER$1 = 0;
  this.UPPERCASE$undLETTER$1 = 0;
  this.OTHER$undLETTER$1 = 0;
  this.TITLECASE$undLETTER$1 = 0;
  this.LETTER$undNUMBER$1 = 0;
  this.COMBINING$undSPACING$undMARK$1 = 0;
  this.ENCLOSING$undMARK$1 = 0;
  this.NON$undSPACING$undMARK$1 = 0;
  this.MODIFIER$undLETTER$1 = 0;
  this.DECIMAL$undDIGIT$undNUMBER$1 = 0;
  this.SURROGATE$1 = 0;
  this.MIN$undRADIX$1 = 2;
  this.MAX$undRADIX$1 = 36;
  this.MIN$undHIGH$undSURROGATE$1 = 55296;
  this.MAX$undHIGH$undSURROGATE$1 = 56319;
  this.MIN$undLOW$undSURROGATE$1 = 56320;
  this.MAX$undLOW$undSURROGATE$1 = 57343;
  this.MIN$undSURROGATE$1 = this.MIN$undHIGH$undSURROGATE__C();
  this.MAX$undSURROGATE$1 = this.MAX$undLOW$undSURROGATE__C();
  return this
});
ScalaJS.c.java_lang_Character$.prototype.toString__C__ = (function(c) {
  return this.toString__C__T(c)
});
ScalaJS.c.java_lang_Character$.prototype.reverseBytes__C__ = (function(ch) {
  return ScalaJS.bC(this.reverseBytes__C__C(ch))
});
ScalaJS.c.java_lang_Character$.prototype.getNumericValue__C__ = (function(c$2) {
  return ScalaJS.bI(this.getNumericValue__C__I(c$2))
});
ScalaJS.c.java_lang_Character$.prototype.toTitleCase__C__ = (function(c$3) {
  return ScalaJS.bC(this.toTitleCase__C__C(c$3))
});
ScalaJS.c.java_lang_Character$.prototype.toLowerCase__C__ = (function(c$4) {
  return ScalaJS.bC(this.toLowerCase__C__C(c$4))
});
ScalaJS.c.java_lang_Character$.prototype.toUpperCase__C__ = (function(c$5) {
  return ScalaJS.bC(this.toUpperCase__C__C(c$5))
});
ScalaJS.c.java_lang_Character$.prototype.getDirectionality__C__ = (function(c$6) {
  return ScalaJS.bB(this.getDirectionality__C__B(c$6))
});
ScalaJS.c.java_lang_Character$.prototype.isJavaIdentifierPart__C__ = (function(c$7) {
  return ScalaJS.bZ(this.isJavaIdentifierPart__C__Z(c$7))
});
ScalaJS.c.java_lang_Character$.prototype.isTitleCase__C__ = (function(c$8) {
  return ScalaJS.bZ(this.isTitleCase__C__Z(c$8))
});
ScalaJS.c.java_lang_Character$.prototype.isUpperCase__C__ = (function(c$9) {
  return ScalaJS.bZ(this.isUpperCase__C__Z(c$9))
});
ScalaJS.c.java_lang_Character$.prototype.isLowerCase__C__ = (function(c$10) {
  return ScalaJS.bZ(this.isLowerCase__C__Z(c$10))
});
ScalaJS.c.java_lang_Character$.prototype.isMirrored__C__ = (function(c$11) {
  return ScalaJS.bZ(this.isMirrored__C__Z(c$11))
});
ScalaJS.c.java_lang_Character$.prototype.isIdentifierIgnorable__C__ = (function(c$12) {
  return ScalaJS.bZ(this.isIdentifierIgnorable__C__Z(c$12))
});
ScalaJS.c.java_lang_Character$.prototype.isUnicodeIdentifierPart__C__ = (function(c$13) {
  return ScalaJS.bZ(this.isUnicodeIdentifierPart__C__Z(c$13))
});
ScalaJS.c.java_lang_Character$.prototype.isUnicodeIdentifierStart__C__ = (function(c$14) {
  return ScalaJS.bZ(this.isUnicodeIdentifierStart__C__Z(c$14))
});
ScalaJS.c.java_lang_Character$.prototype.isSurrogatePair__C__C__ = (function(high, low) {
  return ScalaJS.bZ(this.isSurrogatePair__C__C__Z(high, low))
});
ScalaJS.c.java_lang_Character$.prototype.isLowSurrogate__C__ = (function(c$15) {
  return ScalaJS.bZ(this.isLowSurrogate__C__Z(c$15))
});
ScalaJS.c.java_lang_Character$.prototype.isHighSurrogate__C__ = (function(c$16) {
  return ScalaJS.bZ(this.isHighSurrogate__C__Z(c$16))
});
ScalaJS.c.java_lang_Character$.prototype.isSpaceChar__C__ = (function(c$17) {
  return ScalaJS.bZ(this.isSpaceChar__C__Z(c$17))
});
ScalaJS.c.java_lang_Character$.prototype.isWhitespace__C__ = (function(c$18) {
  return ScalaJS.bZ(this.isWhitespace__C__Z(c$18))
});
ScalaJS.c.java_lang_Character$.prototype.isLetterOrDigit__C__ = (function(c$19) {
  return ScalaJS.bZ(this.isLetterOrDigit__C__Z(c$19))
});
ScalaJS.c.java_lang_Character$.prototype.isLetter__C__ = (function(c$20) {
  return ScalaJS.bZ(this.isLetter__C__Z(c$20))
});
ScalaJS.c.java_lang_Character$.prototype.isDigit__C__ = (function(c$21) {
  return ScalaJS.bZ(this.isDigit__C__Z(c$21))
});
ScalaJS.c.java_lang_Character$.prototype.isISOControl__C__ = (function(c$22) {
  return ScalaJS.bZ(this.isISOControl__C__Z(c$22))
});
ScalaJS.c.java_lang_Character$.prototype.digit__C__I__ = (function(c$23, radix) {
  return ScalaJS.bI(this.digit__C__I__I(c$23, radix))
});
ScalaJS.c.java_lang_Character$.prototype.getType__I__ = (function(codePoint) {
  return ScalaJS.bI(this.getType__I__I(codePoint))
});
ScalaJS.c.java_lang_Character$.prototype.getType__C__ = (function(ch$2) {
  return ScalaJS.bI(this.getType__C__I(ch$2))
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undSURROGATE__ = (function() {
  return ScalaJS.bC(this.MAX$undSURROGATE__C())
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undSURROGATE__ = (function() {
  return ScalaJS.bC(this.MIN$undSURROGATE__C())
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undLOW$undSURROGATE__ = (function() {
  return ScalaJS.bC(this.MAX$undLOW$undSURROGATE__C())
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undLOW$undSURROGATE__ = (function() {
  return ScalaJS.bC(this.MIN$undLOW$undSURROGATE__C())
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undHIGH$undSURROGATE__ = (function() {
  return ScalaJS.bC(this.MAX$undHIGH$undSURROGATE__C())
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undHIGH$undSURROGATE__ = (function() {
  return ScalaJS.bC(this.MIN$undHIGH$undSURROGATE__C())
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undRADIX__ = (function() {
  return ScalaJS.bI(this.MAX$undRADIX__I())
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undRADIX__ = (function() {
  return ScalaJS.bI(this.MIN$undRADIX__I())
});
ScalaJS.c.java_lang_Character$.prototype.SURROGATE__ = (function() {
  return ScalaJS.bB(this.SURROGATE__B())
});
ScalaJS.c.java_lang_Character$.prototype.DECIMAL$undDIGIT$undNUMBER__ = (function() {
  return ScalaJS.bB(this.DECIMAL$undDIGIT$undNUMBER__B())
});
ScalaJS.c.java_lang_Character$.prototype.MODIFIER$undLETTER__ = (function() {
  return ScalaJS.bB(this.MODIFIER$undLETTER__B())
});
ScalaJS.c.java_lang_Character$.prototype.NON$undSPACING$undMARK__ = (function() {
  return ScalaJS.bB(this.NON$undSPACING$undMARK__B())
});
ScalaJS.c.java_lang_Character$.prototype.ENCLOSING$undMARK__ = (function() {
  return ScalaJS.bB(this.ENCLOSING$undMARK__B())
});
ScalaJS.c.java_lang_Character$.prototype.COMBINING$undSPACING$undMARK__ = (function() {
  return ScalaJS.bB(this.COMBINING$undSPACING$undMARK__B())
});
ScalaJS.c.java_lang_Character$.prototype.LETTER$undNUMBER__ = (function() {
  return ScalaJS.bB(this.LETTER$undNUMBER__B())
});
ScalaJS.c.java_lang_Character$.prototype.TITLECASE$undLETTER__ = (function() {
  return ScalaJS.bB(this.TITLECASE$undLETTER__B())
});
ScalaJS.c.java_lang_Character$.prototype.OTHER$undLETTER__ = (function() {
  return ScalaJS.bB(this.OTHER$undLETTER__B())
});
ScalaJS.c.java_lang_Character$.prototype.UPPERCASE$undLETTER__ = (function() {
  return ScalaJS.bB(this.UPPERCASE$undLETTER__B())
});
ScalaJS.c.java_lang_Character$.prototype.LOWERCASE$undLETTER__ = (function() {
  return ScalaJS.bB(this.LOWERCASE$undLETTER__B())
});
ScalaJS.c.java_lang_Character$.prototype.valueOf__C__ = (function(charValue) {
  return this.valueOf__C__Ljava_lang_Character(charValue)
});
ScalaJS.c.java_lang_Character$.prototype.MAX$undVALUE__ = (function() {
  return ScalaJS.bC(this.MAX$undVALUE__C())
});
ScalaJS.c.java_lang_Character$.prototype.MIN$undVALUE__ = (function() {
  return ScalaJS.bC(this.MIN$undVALUE__C())
});
ScalaJS.c.java_lang_Character$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Character$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Character$.prototype = ScalaJS.c.java_lang_Character$.prototype;
ScalaJS.is.java_lang_Character$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Character$)))
});
ScalaJS.as.java_lang_Character$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Character$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Character")
  }
});
ScalaJS.isArrayOf.java_lang_Character$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Character$)))
});
ScalaJS.asArrayOf.java_lang_Character$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Character$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Character;", depth)
  }
});
ScalaJS.data.java_lang_Character$ = new ScalaJS.ClassTypeData({
  java_lang_Character$: 0
}, false, "java.lang.Character$", ScalaJS.data.java_lang_Object, {
  java_lang_Character$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Character$.prototype.$classData = ScalaJS.data.java_lang_Character$;
ScalaJS.moduleInstances.java_lang_Character = undefined;
ScalaJS.modules.java_lang_Character = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Character)) {
    ScalaJS.moduleInstances.java_lang_Character = new ScalaJS.c.java_lang_Character$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Character
});
//@ sourceMappingURL=Character$.js.map
