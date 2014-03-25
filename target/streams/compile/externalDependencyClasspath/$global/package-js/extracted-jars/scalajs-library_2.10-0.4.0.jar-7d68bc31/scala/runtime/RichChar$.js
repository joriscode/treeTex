/** @constructor */
ScalaJS.c.scala_runtime_RichChar$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichChar$.prototype.constructor = ScalaJS.c.scala_runtime_RichChar$;
ScalaJS.c.scala_runtime_RichChar$.prototype.num$extension__C__Lscala_math_Numeric$CharIsIntegral$ = (function($$this) {
  return ScalaJS.modules.scala_math_Numeric$CharIsIntegral()
});
ScalaJS.c.scala_runtime_RichChar$.prototype.ord$extension__C__Lscala_math_Ordering$Char$ = (function($$this) {
  return ScalaJS.modules.scala_math_Ordering$Char()
});
ScalaJS.c.scala_runtime_RichChar$.prototype.asDigit$extension__C__I = (function($$this) {
  return ScalaJS.modules.java_lang_Character().digit__C__I__I($$this, 36)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isControl$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isISOControl__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isDigit$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isDigit__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isLetter$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isLetter__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isLetterOrDigit$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isLetterOrDigit__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isWhitespace$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isWhitespace__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isSpaceChar$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isSpaceChar__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isHighSurrogate$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isHighSurrogate__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isLowSurrogate$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isLowSurrogate__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isSurrogate$extension__C__Z = (function($$this) {
  return (this.isHighSurrogate$extension__C__Z($$this) || this.isLowSurrogate$extension__C__Z($$this))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isUnicodeIdentifierStart$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isUnicodeIdentifierStart__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isUnicodeIdentifierPart$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isUnicodeIdentifierPart__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isIdentifierIgnorable$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isIdentifierIgnorable__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isMirrored$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isMirrored__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isLower$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isLowerCase__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isUpper$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isUpperCase__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isTitleCase$extension__C__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Character().isTitleCase__C__Z($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.toLower$extension__C__C = (function($$this) {
  return ScalaJS.modules.java_lang_Character().toLowerCase__C__C($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.toUpper$extension__C__C = (function($$this) {
  return ScalaJS.modules.java_lang_Character().toUpperCase__C__C($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.toTitleCase$extension__C__C = (function($$this) {
  return ScalaJS.modules.java_lang_Character().toTitleCase__C__C($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.getType$extension__C__I = (function($$this) {
  return ScalaJS.modules.java_lang_Character().getType__C__I($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.getNumericValue$extension__C__I = (function($$this) {
  return ScalaJS.modules.java_lang_Character().getNumericValue__C__I($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.getDirectionality$extension__C__B = (function($$this) {
  return ScalaJS.modules.java_lang_Character().getDirectionality__C__B($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.reverseBytes$extension__C__C = (function($$this) {
  return ScalaJS.modules.java_lang_Character().reverseBytes__C__C($$this)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.hashCode$extension__C__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bC($$this))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.equals$extension__C__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_RichChar(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var RichChar$1 = ScalaJS.as.scala_runtime_RichChar(x$1).self__C();
    return ($$this === RichChar$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_RichChar$.prototype.equals$extension__C__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__C__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.hashCode$extension__C__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__C__I($$this$2))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.reverseBytes$extension__C__ = (function($$this$3) {
  return ScalaJS.bC(this.reverseBytes$extension__C__C($$this$3))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.getDirectionality$extension__C__ = (function($$this$4) {
  return ScalaJS.bB(this.getDirectionality$extension__C__B($$this$4))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.getNumericValue$extension__C__ = (function($$this$5) {
  return ScalaJS.bI(this.getNumericValue$extension__C__I($$this$5))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.getType$extension__C__ = (function($$this$6) {
  return ScalaJS.bI(this.getType$extension__C__I($$this$6))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.toTitleCase$extension__C__ = (function($$this$7) {
  return ScalaJS.bC(this.toTitleCase$extension__C__C($$this$7))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.toUpper$extension__C__ = (function($$this$8) {
  return ScalaJS.bC(this.toUpper$extension__C__C($$this$8))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.toLower$extension__C__ = (function($$this$9) {
  return ScalaJS.bC(this.toLower$extension__C__C($$this$9))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isTitleCase$extension__C__ = (function($$this$10) {
  return ScalaJS.bZ(this.isTitleCase$extension__C__Z($$this$10))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isUpper$extension__C__ = (function($$this$11) {
  return ScalaJS.bZ(this.isUpper$extension__C__Z($$this$11))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isLower$extension__C__ = (function($$this$12) {
  return ScalaJS.bZ(this.isLower$extension__C__Z($$this$12))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isMirrored$extension__C__ = (function($$this$13) {
  return ScalaJS.bZ(this.isMirrored$extension__C__Z($$this$13))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isIdentifierIgnorable$extension__C__ = (function($$this$14) {
  return ScalaJS.bZ(this.isIdentifierIgnorable$extension__C__Z($$this$14))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isUnicodeIdentifierPart$extension__C__ = (function($$this$15) {
  return ScalaJS.bZ(this.isUnicodeIdentifierPart$extension__C__Z($$this$15))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isUnicodeIdentifierStart$extension__C__ = (function($$this$16) {
  return ScalaJS.bZ(this.isUnicodeIdentifierStart$extension__C__Z($$this$16))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isSurrogate$extension__C__ = (function($$this$17) {
  return ScalaJS.bZ(this.isSurrogate$extension__C__Z($$this$17))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isLowSurrogate$extension__C__ = (function($$this$18) {
  return ScalaJS.bZ(this.isLowSurrogate$extension__C__Z($$this$18))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isHighSurrogate$extension__C__ = (function($$this$19) {
  return ScalaJS.bZ(this.isHighSurrogate$extension__C__Z($$this$19))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isSpaceChar$extension__C__ = (function($$this$20) {
  return ScalaJS.bZ(this.isSpaceChar$extension__C__Z($$this$20))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isWhitespace$extension__C__ = (function($$this$21) {
  return ScalaJS.bZ(this.isWhitespace$extension__C__Z($$this$21))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isLetterOrDigit$extension__C__ = (function($$this$22) {
  return ScalaJS.bZ(this.isLetterOrDigit$extension__C__Z($$this$22))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isLetter$extension__C__ = (function($$this$23) {
  return ScalaJS.bZ(this.isLetter$extension__C__Z($$this$23))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isDigit$extension__C__ = (function($$this$24) {
  return ScalaJS.bZ(this.isDigit$extension__C__Z($$this$24))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.isControl$extension__C__ = (function($$this$25) {
  return ScalaJS.bZ(this.isControl$extension__C__Z($$this$25))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.asDigit$extension__C__ = (function($$this$26) {
  return ScalaJS.bI(this.asDigit$extension__C__I($$this$26))
});
ScalaJS.c.scala_runtime_RichChar$.prototype.ord$extension__C__ = (function($$this$27) {
  return this.ord$extension__C__Lscala_math_Ordering$Char$($$this$27)
});
ScalaJS.c.scala_runtime_RichChar$.prototype.num$extension__C__ = (function($$this$28) {
  return this.num$extension__C__Lscala_math_Numeric$CharIsIntegral$($$this$28)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichChar$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichChar$.prototype = ScalaJS.c.scala_runtime_RichChar$.prototype;
ScalaJS.is.scala_runtime_RichChar$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichChar$)))
});
ScalaJS.as.scala_runtime_RichChar$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichChar$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichChar")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichChar$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichChar$)))
});
ScalaJS.asArrayOf.scala_runtime_RichChar$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichChar$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichChar;", depth)
  }
});
ScalaJS.data.scala_runtime_RichChar$ = new ScalaJS.ClassTypeData({
  scala_runtime_RichChar$: 0
}, false, "scala.runtime.RichChar$", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichChar$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichChar$.prototype.$classData = ScalaJS.data.scala_runtime_RichChar$;
ScalaJS.moduleInstances.scala_runtime_RichChar = undefined;
ScalaJS.modules.scala_runtime_RichChar = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_RichChar)) {
    ScalaJS.moduleInstances.scala_runtime_RichChar = new ScalaJS.c.scala_runtime_RichChar$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_RichChar
});
//@ sourceMappingURL=RichChar$.js.map
