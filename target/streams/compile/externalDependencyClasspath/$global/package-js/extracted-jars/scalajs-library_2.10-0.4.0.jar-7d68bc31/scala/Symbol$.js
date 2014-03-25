/** @constructor */
ScalaJS.c.scala_Symbol$ = (function() {
  ScalaJS.c.scala_JSUniquenessCache.call(this)
});
ScalaJS.c.scala_Symbol$.prototype = new ScalaJS.inheritable.scala_JSUniquenessCache();
ScalaJS.c.scala_Symbol$.prototype.constructor = ScalaJS.c.scala_Symbol$;
ScalaJS.c.scala_Symbol$.prototype.apply__T__Lscala_Symbol = (function(name) {
  return ScalaJS.as.scala_Symbol(ScalaJS.c.scala_JSUniquenessCache.prototype.apply__T__O.call(this, name))
});
ScalaJS.c.scala_Symbol$.prototype.valueFromKey__T__Lscala_Symbol = (function(name) {
  return new ScalaJS.c.scala_Symbol().init___T(name)
});
ScalaJS.c.scala_Symbol$.prototype.keyFromValue__Lscala_Symbol__Lscala_Option = (function(sym) {
  return new ScalaJS.c.scala_Some().init___O(sym.name__T())
});
ScalaJS.c.scala_Symbol$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_Symbol()
});
ScalaJS.c.scala_Symbol$.prototype.keyFromValue__O__Lscala_Option = (function(v) {
  return this.keyFromValue__Lscala_Symbol__Lscala_Option(ScalaJS.as.scala_Symbol(v))
});
ScalaJS.c.scala_Symbol$.prototype.valueFromKey__T__O = (function(k) {
  return this.valueFromKey__T__Lscala_Symbol(k)
});
ScalaJS.c.scala_Symbol$.prototype.apply__T__O = (function(name) {
  return this.apply__T__Lscala_Symbol(name)
});
ScalaJS.c.scala_Symbol$.prototype.keyFromValue__Lscala_Symbol__ = (function(sym) {
  return this.keyFromValue__Lscala_Symbol__Lscala_Option(sym)
});
/** @constructor */
ScalaJS.inheritable.scala_Symbol$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Symbol$.prototype = ScalaJS.c.scala_Symbol$.prototype;
ScalaJS.is.scala_Symbol$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Symbol$)))
});
ScalaJS.as.scala_Symbol$ = (function(obj) {
  if ((ScalaJS.is.scala_Symbol$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Symbol")
  }
});
ScalaJS.isArrayOf.scala_Symbol$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Symbol$)))
});
ScalaJS.asArrayOf.scala_Symbol$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Symbol$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Symbol;", depth)
  }
});
ScalaJS.data.scala_Symbol$ = new ScalaJS.ClassTypeData({
  scala_Symbol$: 0
}, false, "scala.Symbol$", ScalaJS.data.scala_JSUniquenessCache, {
  scala_Symbol$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_JSUniquenessCache: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Symbol$.prototype.$classData = ScalaJS.data.scala_Symbol$;
ScalaJS.moduleInstances.scala_Symbol = undefined;
ScalaJS.modules.scala_Symbol = (function() {
  if ((!ScalaJS.moduleInstances.scala_Symbol)) {
    ScalaJS.moduleInstances.scala_Symbol = new ScalaJS.c.scala_Symbol$().init___()
  };
  return ScalaJS.moduleInstances.scala_Symbol
});
//@ sourceMappingURL=Symbol$.js.map
