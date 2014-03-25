/** @constructor */
ScalaJS.c.scala_util_regexp_WordExp$Wildcard = (function() {
  ScalaJS.c.scala_util_regexp_Base$RegExp.call(this);
  this.isNullable$2 = false;
  this.pos$2 = 0;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype = new ScalaJS.inheritable.scala_util_regexp_Base$RegExp();
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.constructor = ScalaJS.c.scala_util_regexp_WordExp$Wildcard;
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.isNullable$lzycompute__p2__Z = (function() {
  if ((!this.bitmap$0$2)) {
    this.isNullable$2 = false;
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.isNullable$2
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.isNullable__Z = (function() {
  if ((!this.bitmap$0$2)) {
    return this.isNullable$lzycompute__p2__Z()
  } else {
    return this.isNullable$2
  }
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.pos__I = (function() {
  return this.pos$2
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.pos$und$eq__I__V = (function(x$1) {
  this.pos$2 = x$1
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.copy__Lscala_util_regexp_WordExp$Wildcard = (function() {
  return new ScalaJS.c.scala_util_regexp_WordExp$Wildcard().init___Lscala_util_regexp_WordExp(this.scala$util$regexp$WordExp$Wildcard$$$outer__Lscala_util_regexp_WordExp())
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.productPrefix__T = (function() {
  return "Wildcard"
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_regexp_WordExp$Wildcard(x$1)
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.equals__O__Z = (function(x$1) {
  var x1 = x$1;
  matchEnd4: {
    if ((ScalaJS.is.scala_util_regexp_WordExp$Wildcard(x1) && (ScalaJS.as.scala_util_regexp_WordExp$Wildcard(x1).scala$util$regexp$WordExp$Wildcard$$$outer__Lscala_util_regexp_WordExp() === this.scala$util$regexp$WordExp$Wildcard$$$outer__Lscala_util_regexp_WordExp()))) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    return ScalaJS.as.scala_util_regexp_WordExp$Wildcard(x$1).canEqual__O__Z(this)
  } else {
    return false
  }
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.scala$util$regexp$WordExp$Wildcard$$$outer__Lscala_util_regexp_WordExp = (function() {
  return ScalaJS.as.scala_util_regexp_WordExp(this.$$outer$f)
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.init___Lscala_util_regexp_WordExp = (function($$outer) {
  ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  this.pos$2 = -1;
  return this
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.scala$util$regexp$WordExp$Wildcard$$$outer__ = (function() {
  return this.scala$util$regexp$WordExp$Wildcard$$$outer__Lscala_util_regexp_WordExp()
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.copy__ = (function() {
  return this.copy__Lscala_util_regexp_WordExp$Wildcard()
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.pos$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.pos$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.pos__ = (function() {
  return ScalaJS.bI(this.pos__I())
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_WordExp$Wildcard = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_WordExp$Wildcard.prototype = ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype;
ScalaJS.is.scala_util_regexp_WordExp$Wildcard = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_WordExp$Wildcard)))
});
ScalaJS.as.scala_util_regexp_WordExp$Wildcard = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_WordExp$Wildcard(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.WordExp$Wildcard")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_WordExp$Wildcard = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_WordExp$Wildcard)))
});
ScalaJS.asArrayOf.scala_util_regexp_WordExp$Wildcard = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_WordExp$Wildcard(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.WordExp$Wildcard;", depth)
  }
});
ScalaJS.data.scala_util_regexp_WordExp$Wildcard = new ScalaJS.ClassTypeData({
  scala_util_regexp_WordExp$Wildcard: 0
}, false, "scala.util.regexp.WordExp$Wildcard", ScalaJS.data.scala_util_regexp_Base$RegExp, {
  scala_util_regexp_WordExp$Wildcard: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_WordExp$Wildcard.prototype.$classData = ScalaJS.data.scala_util_regexp_WordExp$Wildcard;
//@ sourceMappingURL=WordExp$Wildcard.js.map
