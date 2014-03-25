/** @constructor */
ScalaJS.c.scala_util_regexp_WordExp$Letter = (function() {
  ScalaJS.c.scala_util_regexp_Base$RegExp.call(this);
  this.a$2 = null;
  this.isNullable$2 = false;
  this.pos$2 = 0;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype = new ScalaJS.inheritable.scala_util_regexp_Base$RegExp();
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.constructor = ScalaJS.c.scala_util_regexp_WordExp$Letter;
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.isNullable$lzycompute__p2__Z = (function() {
  if ((!this.bitmap$0$2)) {
    this.isNullable$2 = false;
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.isNullable$2
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.a__Lscala_util_regexp_WordExp$Label = (function() {
  return this.a$2
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.isNullable__Z = (function() {
  if ((!this.bitmap$0$2)) {
    return this.isNullable$lzycompute__p2__Z()
  } else {
    return this.isNullable$2
  }
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.pos__I = (function() {
  return this.pos$2
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.pos$und$eq__I__V = (function(x$1) {
  this.pos$2 = x$1
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.copy__Lscala_util_regexp_WordExp$Label__Lscala_util_regexp_WordExp$Letter = (function(a) {
  return new ScalaJS.c.scala_util_regexp_WordExp$Letter().init___Lscala_util_regexp_WordExp__Lscala_util_regexp_WordExp$Label(this.scala$util$regexp$WordExp$Letter$$$outer__Lscala_util_regexp_WordExp(), a)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.copy$default$1__Lscala_util_regexp_WordExp$Label = (function() {
  return this.a__Lscala_util_regexp_WordExp$Label()
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.productPrefix__T = (function() {
  return "Letter"
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.a__Lscala_util_regexp_WordExp$Label();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_regexp_WordExp$Letter(x$1)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_util_regexp_WordExp$Letter(x1) && (ScalaJS.as.scala_util_regexp_WordExp$Letter(x1).scala$util$regexp$WordExp$Letter$$$outer__Lscala_util_regexp_WordExp() === this.scala$util$regexp$WordExp$Letter$$$outer__Lscala_util_regexp_WordExp()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Letter$1 = ScalaJS.as.scala_util_regexp_WordExp$Letter(x$1);
      return (ScalaJS.anyRefEqEq(this.a__Lscala_util_regexp_WordExp$Label(), Letter$1.a__Lscala_util_regexp_WordExp$Label()) && Letter$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.scala$util$regexp$WordExp$Letter$$$outer__Lscala_util_regexp_WordExp = (function() {
  return ScalaJS.as.scala_util_regexp_WordExp(this.$$outer$f)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.init___Lscala_util_regexp_WordExp__Lscala_util_regexp_WordExp$Label = (function($$outer, a) {
  this.a$2 = a;
  ScalaJS.c.scala_util_regexp_Base$RegExp.prototype.init___Lscala_util_regexp_Base.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  this.pos$2 = -1;
  return this
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.scala$util$regexp$WordExp$Letter$$$outer__ = (function() {
  return this.scala$util$regexp$WordExp$Letter$$$outer__Lscala_util_regexp_WordExp()
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.copy__Lscala_util_regexp_WordExp$Label__ = (function(a) {
  return this.copy__Lscala_util_regexp_WordExp$Label__Lscala_util_regexp_WordExp$Letter(a)
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.pos$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.pos$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.pos__ = (function() {
  return ScalaJS.bI(this.pos__I())
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.a__ = (function() {
  return this.a__Lscala_util_regexp_WordExp$Label()
});
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_WordExp$Letter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_WordExp$Letter.prototype = ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype;
ScalaJS.is.scala_util_regexp_WordExp$Letter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_WordExp$Letter)))
});
ScalaJS.as.scala_util_regexp_WordExp$Letter = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_WordExp$Letter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.WordExp$Letter")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_WordExp$Letter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_WordExp$Letter)))
});
ScalaJS.asArrayOf.scala_util_regexp_WordExp$Letter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_WordExp$Letter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.WordExp$Letter;", depth)
  }
});
ScalaJS.data.scala_util_regexp_WordExp$Letter = new ScalaJS.ClassTypeData({
  scala_util_regexp_WordExp$Letter: 0
}, false, "scala.util.regexp.WordExp$Letter", ScalaJS.data.scala_util_regexp_Base$RegExp, {
  scala_util_regexp_WordExp$Letter: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_regexp_Base$RegExp: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_WordExp$Letter.prototype.$classData = ScalaJS.data.scala_util_regexp_WordExp$Letter;
//@ sourceMappingURL=WordExp$Letter.js.map
