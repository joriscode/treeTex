/** @constructor */
ScalaJS.c.java_lang_Short$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TYPE$1 = null;
  this.MIN$undVALUE$1 = 0;
  this.MAX$undVALUE$1 = 0;
  this.SIZE$1 = 0
});
ScalaJS.c.java_lang_Short$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Short$.prototype.constructor = ScalaJS.c.java_lang_Short$;
ScalaJS.c.java_lang_Short$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.java_lang_Short$.prototype.MIN$undVALUE__S = (function() {
  return this.MIN$undVALUE$1
});
ScalaJS.c.java_lang_Short$.prototype.MAX$undVALUE__S = (function() {
  return this.MAX$undVALUE$1
});
ScalaJS.c.java_lang_Short$.prototype.SIZE__I = (function() {
  return this.SIZE$1
});
ScalaJS.c.java_lang_Short$.prototype.valueOf__S__Ljava_lang_Short = (function(shortValue) {
  return new ScalaJS.c.java_lang_Short().init___S(shortValue)
});
ScalaJS.c.java_lang_Short$.prototype.parseShort__T__S = (function(s) {
  return ScalaJS.modules.java_lang_Integer().parseInt__T__I(s)
});
ScalaJS.c.java_lang_Short$.prototype.toString__S__T = (function(s) {
  return ScalaJS.modules.java_lang_Integer().valueOf__I__Ljava_lang_Integer(s).toString__T()
});
ScalaJS.c.java_lang_Short$.prototype.reverseBytes__S__S = (function(i) {
  return (((i >>> 8) & 255) + ((i & 255) << 8))
});
ScalaJS.c.java_lang_Short$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Short = this;
  this.TYPE$1 = ScalaJS.data.scala_Short.getClassOf();
  this.MIN$undVALUE$1 = -32768;
  this.MAX$undVALUE$1 = 32767;
  this.SIZE$1 = 16;
  return this
});
ScalaJS.c.java_lang_Short$.prototype.reverseBytes__S__ = (function(i) {
  return ScalaJS.bS(this.reverseBytes__S__S(i))
});
ScalaJS.c.java_lang_Short$.prototype.toString__S__ = (function(s) {
  return this.toString__S__T(s)
});
ScalaJS.c.java_lang_Short$.prototype.parseShort__T__ = (function(s$2) {
  return ScalaJS.bS(this.parseShort__T__S(s$2))
});
ScalaJS.c.java_lang_Short$.prototype.valueOf__S__ = (function(shortValue) {
  return this.valueOf__S__Ljava_lang_Short(shortValue)
});
ScalaJS.c.java_lang_Short$.prototype.SIZE__ = (function() {
  return ScalaJS.bI(this.SIZE__I())
});
ScalaJS.c.java_lang_Short$.prototype.MAX$undVALUE__ = (function() {
  return ScalaJS.bS(this.MAX$undVALUE__S())
});
ScalaJS.c.java_lang_Short$.prototype.MIN$undVALUE__ = (function() {
  return ScalaJS.bS(this.MIN$undVALUE__S())
});
ScalaJS.c.java_lang_Short$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Short$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Short$.prototype = ScalaJS.c.java_lang_Short$.prototype;
ScalaJS.is.java_lang_Short$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Short$)))
});
ScalaJS.as.java_lang_Short$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Short$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Short")
  }
});
ScalaJS.isArrayOf.java_lang_Short$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Short$)))
});
ScalaJS.asArrayOf.java_lang_Short$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Short$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Short;", depth)
  }
});
ScalaJS.data.java_lang_Short$ = new ScalaJS.ClassTypeData({
  java_lang_Short$: 0
}, false, "java.lang.Short$", ScalaJS.data.java_lang_Object, {
  java_lang_Short$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Short$.prototype.$classData = ScalaJS.data.java_lang_Short$;
ScalaJS.moduleInstances.java_lang_Short = undefined;
ScalaJS.modules.java_lang_Short = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Short)) {
    ScalaJS.moduleInstances.java_lang_Short = new ScalaJS.c.java_lang_Short$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Short
});
//@ sourceMappingURL=Short$.js.map
