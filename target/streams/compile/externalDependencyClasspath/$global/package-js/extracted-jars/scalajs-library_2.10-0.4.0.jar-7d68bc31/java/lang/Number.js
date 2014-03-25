/** @constructor */
ScalaJS.c.java_lang_Number = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.java_lang_Number.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Number.prototype.constructor = ScalaJS.c.java_lang_Number;
ScalaJS.c.java_lang_Number.prototype.byteValue__B = (function() {
  return this.intValue__I()
});
ScalaJS.c.java_lang_Number.prototype.shortValue__S = (function() {
  return this.intValue__I()
});
ScalaJS.c.java_lang_Number.prototype.shortValue__ = (function() {
  return ScalaJS.bS(this.shortValue__S())
});
ScalaJS.c.java_lang_Number.prototype.byteValue__ = (function() {
  return ScalaJS.bB(this.byteValue__B())
});
ScalaJS.c.java_lang_Number.prototype.doubleValue__ = (function() {
  return ScalaJS.bD(this.doubleValue__D())
});
ScalaJS.c.java_lang_Number.prototype.floatValue__ = (function() {
  return ScalaJS.bF(this.floatValue__F())
});
ScalaJS.c.java_lang_Number.prototype.longValue__ = (function() {
  return ScalaJS.bJ(this.longValue__J())
});
ScalaJS.c.java_lang_Number.prototype.intValue__ = (function() {
  return ScalaJS.bI(this.intValue__I())
});
/** @constructor */
ScalaJS.inheritable.java_lang_Number = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Number.prototype = ScalaJS.c.java_lang_Number.prototype;
ScalaJS.is.java_lang_Number = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Number)))
});
ScalaJS.as.java_lang_Number = (function(obj) {
  if ((ScalaJS.is.java_lang_Number(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Number")
  }
});
ScalaJS.isArrayOf.java_lang_Number = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Number)))
});
ScalaJS.asArrayOf.java_lang_Number = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Number(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Number;", depth)
  }
});
ScalaJS.data.java_lang_Number = new ScalaJS.ClassTypeData({
  java_lang_Number: 0
}, false, "java.lang.Number", ScalaJS.data.java_lang_Object, {
  java_lang_Number: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Number.prototype.$classData = ScalaJS.data.java_lang_Number;
//@ sourceMappingURL=Number.js.map
