/** @constructor */
ScalaJS.c.scala_util_grammar_ConsRHS = (function() {
  ScalaJS.c.scala_util_grammar_HedgeRHS.call(this);
  this.tnt$2 = 0;
  this.hnt$2 = 0
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype = new ScalaJS.inheritable.scala_util_grammar_HedgeRHS();
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.constructor = ScalaJS.c.scala_util_grammar_ConsRHS;
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.tnt__I = (function() {
  return this.tnt$2
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.hnt__I = (function() {
  return this.hnt$2
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.copy__I__I__Lscala_util_grammar_ConsRHS = (function(tnt, hnt) {
  return new ScalaJS.c.scala_util_grammar_ConsRHS().init___I__I(tnt, hnt)
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.copy$default$1__I = (function() {
  return this.tnt__I()
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.copy$default$2__I = (function() {
  return this.hnt__I()
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.productPrefix__T = (function() {
  return "ConsRHS"
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return ScalaJS.bI(this.tnt__I());
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
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_grammar_ConsRHS(x$1)
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.hashCode__I = (function() {
  var acc = -889275714;
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, this.tnt__I());
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, this.hnt__I());
  return ScalaJS.modules.scala_runtime_Statics().finalizeHash__I__I__I(acc, 2)
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_util_grammar_ConsRHS(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ConsRHS$1 = ScalaJS.as.scala_util_grammar_ConsRHS(x$1);
      return (((this.tnt__I() === ConsRHS$1.tnt__I()) && (this.hnt__I() === ConsRHS$1.hnt__I())) && ConsRHS$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.init___I__I = (function(tnt, hnt) {
  this.tnt$2 = tnt;
  this.hnt$2 = hnt;
  ScalaJS.c.scala_util_grammar_HedgeRHS.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.copy__I__I__ = (function(tnt, hnt) {
  return this.copy__I__I__Lscala_util_grammar_ConsRHS(tnt, hnt)
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.hnt__ = (function() {
  return ScalaJS.bI(this.hnt__I())
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.tnt__ = (function() {
  return ScalaJS.bI(this.tnt__I())
});
/** @constructor */
ScalaJS.inheritable.scala_util_grammar_ConsRHS = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_grammar_ConsRHS.prototype = ScalaJS.c.scala_util_grammar_ConsRHS.prototype;
ScalaJS.is.scala_util_grammar_ConsRHS = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_grammar_ConsRHS)))
});
ScalaJS.as.scala_util_grammar_ConsRHS = (function(obj) {
  if ((ScalaJS.is.scala_util_grammar_ConsRHS(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.grammar.ConsRHS")
  }
});
ScalaJS.isArrayOf.scala_util_grammar_ConsRHS = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_grammar_ConsRHS)))
});
ScalaJS.asArrayOf.scala_util_grammar_ConsRHS = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_grammar_ConsRHS(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.grammar.ConsRHS;", depth)
  }
});
ScalaJS.data.scala_util_grammar_ConsRHS = new ScalaJS.ClassTypeData({
  scala_util_grammar_ConsRHS: 0
}, false, "scala.util.grammar.ConsRHS", ScalaJS.data.scala_util_grammar_HedgeRHS, {
  scala_util_grammar_ConsRHS: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_grammar_HedgeRHS: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_grammar_ConsRHS.prototype.$classData = ScalaJS.data.scala_util_grammar_ConsRHS;
//@ sourceMappingURL=ConsRHS.js.map
