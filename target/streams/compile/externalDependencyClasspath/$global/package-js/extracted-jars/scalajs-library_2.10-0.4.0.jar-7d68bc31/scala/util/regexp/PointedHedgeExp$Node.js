/** @constructor */
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node = (function() {
  ScalaJS.c.scala_util_regexp_Base$RegExp.call(this);
  this.label$2 = null;
  this.r$2 = null;
  this.isNullable$2 = false
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype = new ScalaJS.inheritable.scala_util_regexp_Base$RegExp();
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.constructor = ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node;
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.label__O = (function() {
  return this.label$2
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.r__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r$2
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.isNullable__Z = (function() {
  return false
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.copy__O__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_PointedHedgeExp$Node = (function(label, r) {
  return new ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node().init___Lscala_util_regexp_PointedHedgeExp__O__Lscala_util_regexp_Base$RegExp(this.scala$util$regexp$PointedHedgeExp$Node$$$outer__Lscala_util_regexp_PointedHedgeExp(), label, r)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.copy$default$1__O = (function() {
  return this.label__O()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.copy$default$2__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.productPrefix__T = (function() {
  return "Node"
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.label__O();
        break
      };
    case 1:
      {
        return this.r__Lscala_util_regexp_Base$RegExp();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_regexp_PointedHedgeExp$Node(x$1)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_util_regexp_PointedHedgeExp$Node(x1) && (ScalaJS.as.scala_util_regexp_PointedHedgeExp$Node(x1).scala$util$regexp$PointedHedgeExp$Node$$$outer__Lscala_util_regexp_PointedHedgeExp() === this.scala$util$regexp$PointedHedgeExp$Node$$$outer__Lscala_util_regexp_PointedHedgeExp()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Node$1 = ScalaJS.as.scala_util_regexp_PointedHedgeExp$Node(x$1);
      return ((ScalaJS.anyEqEq(this.label__O(), Node$1.label__O()) && ScalaJS.anyRefEqEq(this.r__Lscala_util_regexp_Base$RegExp(), Node$1.r__Lscala_util_regexp_Base$RegExp())) && Node$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.scala$util$regexp$PointedHedgeExp$Node$$$outer__Lscala_util_regexp_PointedHedgeExp = (function() {
  return ScalaJS.as.scala_util_regexp_PointedHedgeExp(this.$$outer$f)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.init___Lscala_util_regexp_PointedHedgeExp__O__Lscala_util_regexp_Base$RegExp = (function($$outer, label, r) {
  this.label$2 = label;
  this.r$2 = r;
  ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.scala$util$regexp$PointedHedgeExp$Node$$$outer__ = (function() {
  return this.scala$util$regexp$PointedHedgeExp$Node$$$outer__Lscala_util_regexp_PointedHedgeExp()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.copy__O__Lscala_util_regexp_Base$RegExp__ = (function(label, r) {
  return this.copy__O__Lscala_util_regexp_Base$RegExp__Lscala_util_regexp_PointedHedgeExp$Node(label, r)
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.r__ = (function() {
  return this.r__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.label__ = (function() {
  return this.label__O()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_PointedHedgeExp$Node = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_PointedHedgeExp$Node.prototype = ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype;
ScalaJS.is.scala_util_regexp_PointedHedgeExp$Node = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_PointedHedgeExp$Node)))
});
ScalaJS.as.scala_util_regexp_PointedHedgeExp$Node = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_PointedHedgeExp$Node(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.PointedHedgeExp$Node")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_PointedHedgeExp$Node = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_PointedHedgeExp$Node)))
});
ScalaJS.asArrayOf.scala_util_regexp_PointedHedgeExp$Node = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_PointedHedgeExp$Node(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.PointedHedgeExp$Node;", depth)
  }
});
ScalaJS.data.scala_util_regexp_PointedHedgeExp$Node = new ScalaJS.ClassTypeData({
  scala_util_regexp_PointedHedgeExp$Node: 0
}, false, "scala.util.regexp.PointedHedgeExp$Node", ScalaJS.data.scala_util_regexp_Base$RegExp, {
  scala_util_regexp_PointedHedgeExp$Node: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_PointedHedgeExp$Node.prototype.$classData = ScalaJS.data.scala_util_regexp_PointedHedgeExp$Node;
//@ sourceMappingURL=PointedHedgeExp$Node.js.map
