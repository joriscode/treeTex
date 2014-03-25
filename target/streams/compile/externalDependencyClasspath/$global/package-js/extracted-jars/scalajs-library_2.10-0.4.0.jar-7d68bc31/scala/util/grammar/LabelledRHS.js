/** @constructor */
ScalaJS.c.scala_util_grammar_LabelledRHS = (function() {
  ScalaJS.c.scala_util_grammar_TreeRHS.call(this);
  this.label$2 = null;
  this.hnt$2 = 0
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype = new ScalaJS.inheritable.scala_util_grammar_TreeRHS();
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.constructor = ScalaJS.c.scala_util_grammar_LabelledRHS;
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.label__O = (function() {
  return this.label$2
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.hnt__I = (function() {
  return this.hnt$2
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.copy__O__I__Lscala_util_grammar_LabelledRHS = (function(label, hnt) {
  return new ScalaJS.c.scala_util_grammar_LabelledRHS().init___O__I(label, hnt)
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.copy$default$1__O = (function() {
  return this.label__O()
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.copy$default$2__I = (function() {
  return this.hnt__I()
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.productPrefix__T = (function() {
  return "LabelledRHS"
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.label__O();
        break
      };
    case 1:
      {
        return ScalaJS.bI(this.hnt__I());
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_grammar_LabelledRHS(x$1)
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.hashCode__I = (function() {
  var acc = -889275714;
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, ScalaJS.modules.scala_runtime_Statics().anyHash__O__I(this.label__O()));
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, this.hnt__I());
  return ScalaJS.modules.scala_runtime_Statics().finalizeHash__I__I__I(acc, 2)
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_util_grammar_LabelledRHS(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var LabelledRHS$1 = ScalaJS.as.scala_util_grammar_LabelledRHS(x$1);
      return ((ScalaJS.anyEqEq(this.label__O(), LabelledRHS$1.label__O()) && (this.hnt__I() === LabelledRHS$1.hnt__I())) && LabelledRHS$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.init___O__I = (function(label, hnt) {
  this.label$2 = label;
  this.hnt$2 = hnt;
  ScalaJS.c.scala_util_grammar_TreeRHS.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.copy__O__I__ = (function(label, hnt) {
  return this.copy__O__I__Lscala_util_grammar_LabelledRHS(label, hnt)
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.hnt__ = (function() {
  return ScalaJS.bI(this.hnt__I())
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.label__ = (function() {
  return this.label__O()
});
/** @constructor */
ScalaJS.inheritable.scala_util_grammar_LabelledRHS = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_grammar_LabelledRHS.prototype = ScalaJS.c.scala_util_grammar_LabelledRHS.prototype;
ScalaJS.is.scala_util_grammar_LabelledRHS = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_grammar_LabelledRHS)))
});
ScalaJS.as.scala_util_grammar_LabelledRHS = (function(obj) {
  if ((ScalaJS.is.scala_util_grammar_LabelledRHS(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.grammar.LabelledRHS")
  }
});
ScalaJS.isArrayOf.scala_util_grammar_LabelledRHS = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_grammar_LabelledRHS)))
});
ScalaJS.asArrayOf.scala_util_grammar_LabelledRHS = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_grammar_LabelledRHS(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.grammar.LabelledRHS;", depth)
  }
});
ScalaJS.data.scala_util_grammar_LabelledRHS = new ScalaJS.ClassTypeData({
  scala_util_grammar_LabelledRHS: 0
}, false, "scala.util.grammar.LabelledRHS", ScalaJS.data.scala_util_grammar_TreeRHS, {
  scala_util_grammar_LabelledRHS: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_grammar_TreeRHS: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_grammar_LabelledRHS.prototype.$classData = ScalaJS.data.scala_util_grammar_LabelledRHS;
//@ sourceMappingURL=LabelledRHS.js.map
