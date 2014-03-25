/** @constructor */
ScalaJS.c.scala_compat_Platform$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.EOL$1 = null
});
ScalaJS.c.scala_compat_Platform$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_compat_Platform$.prototype.constructor = ScalaJS.c.scala_compat_Platform$;
ScalaJS.c.scala_compat_Platform$.prototype.arraycopy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
  ScalaJS.modules.java_lang_System().arraycopy__O__I__O__I__I__V(src, srcPos, dest, destPos, length)
});
ScalaJS.c.scala_compat_Platform$.prototype.createArray__Ljava_lang_Class__I__O = (function(elemClass, length) {
  return ScalaJS.modules.java_lang_reflect_Array().newInstance__Ljava_lang_Class__I__O(elemClass, length)
});
ScalaJS.c.scala_compat_Platform$.prototype.arrayclear__AI__V = (function(arr) {
  ScalaJS.modules.java_util_Arrays().fill__AI__I__V(arr, 0)
});
ScalaJS.c.scala_compat_Platform$.prototype.getClassForName__T__Ljava_lang_Class = (function(name) {
  return ScalaJS.modules.java_lang_Class().forName__T__Ljava_lang_Class(name)
});
ScalaJS.c.scala_compat_Platform$.prototype.EOL__T = (function() {
  return this.EOL$1
});
ScalaJS.c.scala_compat_Platform$.prototype.currentTime__J = (function() {
  return ScalaJS.modules.java_lang_System().currentTimeMillis__J()
});
ScalaJS.c.scala_compat_Platform$.prototype.collectGarbage__V = (function() {
  ScalaJS.modules.java_lang_System().gc__V()
});
ScalaJS.c.scala_compat_Platform$.prototype.defaultCharsetName__T = (function() {
  return ScalaJS.modules.java_nio_charset_Charset().defaultCharset__Ljava_nio_charset_Charset().name__T()
});
ScalaJS.c.scala_compat_Platform$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_compat_Platform = this;
  this.EOL$1 = "\n";
  return this
});
ScalaJS.c.scala_compat_Platform$.prototype.defaultCharsetName__ = (function() {
  return this.defaultCharsetName__T()
});
ScalaJS.c.scala_compat_Platform$.prototype.collectGarbage__ = (function() {
  return ScalaJS.bV(this.collectGarbage__V())
});
ScalaJS.c.scala_compat_Platform$.prototype.currentTime__ = (function() {
  return ScalaJS.bJ(this.currentTime__J())
});
ScalaJS.c.scala_compat_Platform$.prototype.EOL__ = (function() {
  return this.EOL__T()
});
ScalaJS.c.scala_compat_Platform$.prototype.getClassForName__T__ = (function(name) {
  return this.getClassForName__T__Ljava_lang_Class(name)
});
ScalaJS.c.scala_compat_Platform$.prototype.arrayclear__AI__ = (function(arr) {
  return ScalaJS.bV(this.arrayclear__AI__V(arr))
});
ScalaJS.c.scala_compat_Platform$.prototype.createArray__Ljava_lang_Class__I__ = (function(elemClass, length) {
  return this.createArray__Ljava_lang_Class__I__O(elemClass, length)
});
ScalaJS.c.scala_compat_Platform$.prototype.arraycopy__O__I__O__I__I__ = (function(src, srcPos, dest, destPos, length$2) {
  return ScalaJS.bV(this.arraycopy__O__I__O__I__I__V(src, srcPos, dest, destPos, length$2))
});
/** @constructor */
ScalaJS.inheritable.scala_compat_Platform$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_compat_Platform$.prototype = ScalaJS.c.scala_compat_Platform$.prototype;
ScalaJS.is.scala_compat_Platform$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_compat_Platform$)))
});
ScalaJS.as.scala_compat_Platform$ = (function(obj) {
  if ((ScalaJS.is.scala_compat_Platform$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.compat.Platform")
  }
});
ScalaJS.isArrayOf.scala_compat_Platform$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_compat_Platform$)))
});
ScalaJS.asArrayOf.scala_compat_Platform$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_compat_Platform$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.compat.Platform;", depth)
  }
});
ScalaJS.data.scala_compat_Platform$ = new ScalaJS.ClassTypeData({
  scala_compat_Platform$: 0
}, false, "scala.compat.Platform$", ScalaJS.data.java_lang_Object, {
  scala_compat_Platform$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_compat_Platform$.prototype.$classData = ScalaJS.data.scala_compat_Platform$;
ScalaJS.moduleInstances.scala_compat_Platform = undefined;
ScalaJS.modules.scala_compat_Platform = (function() {
  if ((!ScalaJS.moduleInstances.scala_compat_Platform)) {
    ScalaJS.moduleInstances.scala_compat_Platform = new ScalaJS.c.scala_compat_Platform$().init___()
  };
  return ScalaJS.moduleInstances.scala_compat_Platform
});
//@ sourceMappingURL=Platform$.js.map
