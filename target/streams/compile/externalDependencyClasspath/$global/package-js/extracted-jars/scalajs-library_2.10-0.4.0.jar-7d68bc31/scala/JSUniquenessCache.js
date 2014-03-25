/** @constructor */
ScalaJS.c.scala_JSUniquenessCache = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.map$1 = null
});
ScalaJS.c.scala_JSUniquenessCache.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_JSUniquenessCache.prototype.constructor = ScalaJS.c.scala_JSUniquenessCache;
ScalaJS.c.scala_JSUniquenessCache.prototype.map__p1__Lscala_scalajs_js_Dictionary = (function() {
  return this.map$1
});
ScalaJS.c.scala_JSUniquenessCache.prototype.apply__T__O = (function(name) {
  var symName = name;
  var cachedSym = this.map__p1__Lscala_scalajs_js_Dictionary()[symName];
  if ((!cachedSym)) {
    var sym = this.valueFromKey__T__O(name);
    this.map__p1__Lscala_scalajs_js_Dictionary()[name] = sym;
    return sym
  } else {
    return cachedSym
  }
});
ScalaJS.c.scala_JSUniquenessCache.prototype.unapply__O__Lscala_Option = (function(other) {
  return this.keyFromValue__O__Lscala_Option(other)
});
ScalaJS.c.scala_JSUniquenessCache.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.map$1 = ScalaJS.modules.scala_scalajs_js_Dictionary().empty__Lscala_scalajs_js_Dictionary();
  return this
});
ScalaJS.c.scala_JSUniquenessCache.prototype.unapply__O__ = (function(other) {
  return this.unapply__O__Lscala_Option(other)
});
ScalaJS.c.scala_JSUniquenessCache.prototype.apply__T__ = (function(name) {
  return this.apply__T__O(name)
});
ScalaJS.c.scala_JSUniquenessCache.prototype.keyFromValue__O__ = (function(v) {
  return this.keyFromValue__O__Lscala_Option(v)
});
ScalaJS.c.scala_JSUniquenessCache.prototype.valueFromKey__T__ = (function(k) {
  return this.valueFromKey__T__O(k)
});
/** @constructor */
ScalaJS.inheritable.scala_JSUniquenessCache = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_JSUniquenessCache.prototype = ScalaJS.c.scala_JSUniquenessCache.prototype;
ScalaJS.is.scala_JSUniquenessCache = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_JSUniquenessCache)))
});
ScalaJS.as.scala_JSUniquenessCache = (function(obj) {
  if ((ScalaJS.is.scala_JSUniquenessCache(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.JSUniquenessCache")
  }
});
ScalaJS.isArrayOf.scala_JSUniquenessCache = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_JSUniquenessCache)))
});
ScalaJS.asArrayOf.scala_JSUniquenessCache = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_JSUniquenessCache(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.JSUniquenessCache;", depth)
  }
});
ScalaJS.data.scala_JSUniquenessCache = new ScalaJS.ClassTypeData({
  scala_JSUniquenessCache: 0
}, false, "scala.JSUniquenessCache", ScalaJS.data.java_lang_Object, {
  scala_JSUniquenessCache: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_JSUniquenessCache.prototype.$classData = ScalaJS.data.scala_JSUniquenessCache;
//@ sourceMappingURL=JSUniquenessCache.js.map
