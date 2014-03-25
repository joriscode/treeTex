/** @constructor */
ScalaJS.c.scala_util_regexp_Base$Eps$ = (function() {
  ScalaJS.c.scala_util_regexp_Base$RegExp.call(this);
  this.isNullable$2 = false;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype = new ScalaJS.inheritable.scala_util_regexp_Base$RegExp();
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.constructor = ScalaJS.c.scala_util_regexp_Base$Eps$;
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.isNullable$lzycompute__p2__Z = (function() {
  if ((!this.bitmap$0$2)) {
    this.isNullable$2 = true;
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.isNullable$2
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.isNullable__Z = (function() {
  if ((!this.bitmap$0$2)) {
    return this.isNullable$lzycompute__p2__Z()
  } else {
    return this.isNullable$2
  }
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.toString__T = (function() {
  return "Eps"
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.productPrefix__T = (function() {
  return "Eps"
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_regexp_Base$Eps$(x$1)
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.hashCode__I = (function() {
  return 69896
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.readResolve__p2__O = (function() {
  return this.scala$util$regexp$Base$Eps$$$outer__Lscala_util_regexp_Base().Eps__Lscala_util_regexp_Base$Eps$()
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.scala$util$regexp$Base$Eps$$$outer__Lscala_util_regexp_Base = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.init___Lscala_util_regexp_Base = (function($$outer) {
  ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.scala$util$regexp$Base$Eps$$$outer__ = (function() {
  return this.scala$util$regexp$Base$Eps$$$outer__Lscala_util_regexp_Base()
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base$Eps$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base$Eps$.prototype = ScalaJS.c.scala_util_regexp_Base$Eps$.prototype;
ScalaJS.is.scala_util_regexp_Base$Eps$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base$Eps$)))
});
ScalaJS.as.scala_util_regexp_Base$Eps$ = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base$Eps$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base$Eps")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base$Eps$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base$Eps$)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base$Eps$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base$Eps$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base$Eps;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base$Eps$ = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base$Eps$: 0
}, false, "scala.util.regexp.Base$Eps$", ScalaJS.data.scala_util_regexp_Base$RegExp, {
  scala_util_regexp_Base$Eps$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base$Eps$.prototype.$classData = ScalaJS.data.scala_util_regexp_Base$Eps$;
//@ sourceMappingURL=Base$Eps$.js.map
