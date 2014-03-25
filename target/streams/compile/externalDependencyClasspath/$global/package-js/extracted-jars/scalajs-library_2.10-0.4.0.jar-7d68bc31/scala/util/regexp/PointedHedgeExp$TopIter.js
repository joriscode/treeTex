/** @constructor */
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter = (function() {
  ScalaJS.c.scala_util_regexp_Base$RegExp.call(this);
  this.r1$2 = null;
  this.r2$2 = null;
  this.isNullable$2 = false
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype = new ScalaJS.inheritable.scala_util_regexp_Base$RegExp();
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.constructor = ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter;
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.r1__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r1$2
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.r2__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r2$2
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.isNullable__Z = (function() {
  return this.isNullable$2
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.copy__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_PointedHedgeExp$TopIter = (function(r1, r2) {
  return new ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter().init___Lscala_util_regexp_PointedHedgeExp__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp(this.scala$util$regexp$PointedHedgeExp$TopIter$$$outer__Lscala_util_regexp_PointedHedgeExp(), r1, r2)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.copy$default$1__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r1__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.copy$default$2__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r2__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.productPrefix__T = (function() {
  return "TopIter"
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.r1__Lscala_util_regexp_Base$RegExp();
        break
      };
    case 1:
      {
        return this.r2__Lscala_util_regexp_Base$RegExp();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_regexp_PointedHedgeExp$TopIter(x$1)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_util_regexp_PointedHedgeExp$TopIter(x1) && (ScalaJS.as.scala_util_regexp_PointedHedgeExp$TopIter(x1).scala$util$regexp$PointedHedgeExp$TopIter$$$outer__Lscala_util_regexp_PointedHedgeExp() === this.scala$util$regexp$PointedHedgeExp$TopIter$$$outer__Lscala_util_regexp_PointedHedgeExp()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var TopIter$1 = ScalaJS.as.scala_util_regexp_PointedHedgeExp$TopIter(x$1);
      return ((ScalaJS.anyRefEqEq(this.r1__Lscala_util_regexp_Base$RegExp(), TopIter$1.r1__Lscala_util_regexp_Base$RegExp()) && ScalaJS.anyRefEqEq(this.r2__Lscala_util_regexp_Base$RegExp(), TopIter$1.r2__Lscala_util_regexp_Base$RegExp())) && TopIter$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.scala$util$regexp$PointedHedgeExp$TopIter$$$outer__Lscala_util_regexp_PointedHedgeExp = (function() {
  return ScalaJS.as.scala_util_regexp_PointedHedgeExp(this.$$outer$f)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.init___Lscala_util_regexp_PointedHedgeExp__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp = (function($$outer, r1, r2) {
  this.r1$2 = r1;
  this.r2$2 = r2;
  ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  this.isNullable$2 = (r1.isNullable__Z() && r2.isNullable__Z());
  return this
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.scala$util$regexp$PointedHedgeExp$TopIter$$$outer__ = (function() {
  return this.scala$util$regexp$PointedHedgeExp$TopIter$$$outer__Lscala_util_regexp_PointedHedgeExp()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.copy__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp__ = (function(r1, r2) {
  return this.copy__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_PointedHedgeExp$TopIter(r1, r2)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.r2__ = (function() {
  return this.r2__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.r1__ = (function() {
  return this.r1__Lscala_util_regexp_Base$RegExp()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_PointedHedgeExp$TopIter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_PointedHedgeExp$TopIter.prototype = ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype;
ScalaJS.is.scala_util_regexp_PointedHedgeExp$TopIter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_PointedHedgeExp$TopIter)))
});
ScalaJS.as.scala_util_regexp_PointedHedgeExp$TopIter = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_PointedHedgeExp$TopIter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.PointedHedgeExp$TopIter")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_PointedHedgeExp$TopIter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_PointedHedgeExp$TopIter)))
});
ScalaJS.asArrayOf.scala_util_regexp_PointedHedgeExp$TopIter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_PointedHedgeExp$TopIter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.PointedHedgeExp$TopIter;", depth)
  }
});
ScalaJS.data.scala_util_regexp_PointedHedgeExp$TopIter = new ScalaJS.ClassTypeData({
  scala_util_regexp_PointedHedgeExp$TopIter: 0
}, false, "scala.util.regexp.PointedHedgeExp$TopIter", ScalaJS.data.scala_util_regexp_Base$RegExp, {
  scala_util_regexp_PointedHedgeExp$TopIter: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$TopIter.prototype.$classData = ScalaJS.data.scala_util_regexp_PointedHedgeExp$TopIter;
//@ sourceMappingURL=PointedHedgeExp$TopIter.js.map
