/** @constructor */
ScalaJS.c.scala_util_regexp_Base$Star = (function() {
  ScalaJS.c.scala_util_regexp_Base$RegExp.call(this);
  this.r$2 = null;
  this.isNullable$2 = false;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype = new ScalaJS.inheritable.scala_util_regexp_Base$RegExp();
ScalaJS.c.scala_util_regexp_Base$Star.prototype.constructor = ScalaJS.c.scala_util_regexp_Base$Star;
ScalaJS.c.scala_util_regexp_Base$Star.prototype.isNullable$lzycompute__p2__Z = (function() {
  if ((!this.bitmap$0$2)) {
    this.isNullable$2 = true;
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.isNullable$2
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.r__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r$2
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.isNullable__Z = (function() {
  if ((!this.bitmap$0$2)) {
    return this.isNullable$lzycompute__p2__Z()
  } else {
    return this.isNullable$2
  }
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.copy__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$Star = (function(r) {
  return new ScalaJS.c.scala_util_regexp_Base$Star().init___Lscala_util_regexp_Base__Lscala_util_regexp_Base$RegExp(this.scala$util$regexp$Base$Star$$$outer__Lscala_util_regexp_Base(), r)
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.copy$default$1__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.productPrefix__T = (function() {
  return "Star"
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.r__Lscala_util_regexp_Base$RegExp();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_regexp_Base$Star(x$1)
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_util_regexp_Base$Star(x1) && (ScalaJS.as.scala_util_regexp_Base$Star(x1).scala$util$regexp$Base$Star$$$outer__Lscala_util_regexp_Base() === this.scala$util$regexp$Base$Star$$$outer__Lscala_util_regexp_Base()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Star$1 = ScalaJS.as.scala_util_regexp_Base$Star(x$1);
      return (ScalaJS.anyRefEqEq(this.r__Lscala_util_regexp_Base$RegExp(), Star$1.r__Lscala_util_regexp_Base$RegExp()) && Star$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.scala$util$regexp$Base$Star$$$outer__Lscala_util_regexp_Base = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.init___Lscala_util_regexp_Base__Lscala_util_regexp_Base$RegExp = (function($$outer, r) {
  this.r$2 = r;
  ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.scala$util$regexp$Base$Star$$$outer__ = (function() {
  return this.scala$util$regexp$Base$Star$$$outer__Lscala_util_regexp_Base()
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.copy__Lscala_util_regexp_Base$RegExp__ = (function(r) {
  return this.copy__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_Base$Star(r)
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.r__ = (function() {
  return this.r__Lscala_util_regexp_Base$RegExp()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_Base$Star = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_Base$Star.prototype = ScalaJS.c.scala_util_regexp_Base$Star.prototype;
ScalaJS.is.scala_util_regexp_Base$Star = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_Base$Star)))
});
ScalaJS.as.scala_util_regexp_Base$Star = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_Base$Star(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.Base$Star")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_Base$Star = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_Base$Star)))
});
ScalaJS.asArrayOf.scala_util_regexp_Base$Star = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_Base$Star(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.Base$Star;", depth)
  }
});
ScalaJS.data.scala_util_regexp_Base$Star = new ScalaJS.ClassTypeData({
  scala_util_regexp_Base$Star: 0
}, false, "scala.util.regexp.Base$Star", ScalaJS.data.scala_util_regexp_Base$RegExp, {
  scala_util_regexp_Base$Star: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_Base$Star.prototype.$classData = ScalaJS.data.scala_util_regexp_Base$Star;
//@ sourceMappingURL=Base$Star.js.map
